import React, { useMemo, useState } from 'react';
import { Trophy, Star, Sparkles, Crown, Medal, Zap, Flame, Award, Edit2 } from 'lucide-react';
import './LeaderboardWorkspace.css';

export default function LeaderboardWorkspace({ users = [], assignments = [], codingTests = [], currentUser = {} }) {
  const [overrides, setOverrides] = useState({});

  const handleEdit = (origName, origXp) => {
    const newName = window.prompt(`Edit name for ${origName}:`, overrides[origName]?.name || origName);
    if (newName === null) return;
    const newXpStr = window.prompt(`Edit XP for ${newName}:`, overrides[origName]?.xp || origXp);
    if (newXpStr === null) return;
    
    const newXp = parseInt(newXpStr, 10);
    setOverrides(prev => ({
      ...prev,
      [origName]: { name: newName, xp: isNaN(newXp) ? origXp : newXp }
    }));
  };

  // Calculate Leaderboard
  const { activeLeaderboard, topThree, currentRank, gapToTopThree } = useMemo(() => {
    const xpMap = {};
    const students = users.filter(u => u.role === 'student');
    
    if (students.length > 0) {
      students.forEach(s => { xpMap[s.name] = 0; });
    }

    const processSubmissions = (arr) => {
      arr.forEach(item => {
        if (item.submissions) {
          item.submissions.forEach(sub => {
            if (sub.grade) {
              const gradeStr = sub.grade.split('/')[0];
              const gradeNum = parseInt(gradeStr, 10);
              if (!isNaN(gradeNum) && xpMap[sub.studentName] !== undefined) {
                xpMap[sub.studentName] += gradeNum;
              } else if (!isNaN(gradeNum)) {
                xpMap[sub.studentName] = (xpMap[sub.studentName] || 0) + gradeNum;
              }
            }
          });
        }
      });
    };

    processSubmissions(assignments);
    processSubmissions(codingTests);

    // If student isn't tracked yet, ensure they are
    if (currentUser.role === 'student' && currentUser.name && xpMap[currentUser.name] === undefined) {
      xpMap[currentUser.name] = 0;
    }

    const board = Object.keys(xpMap).map(name => {
      const finalName = overrides[name]?.name || name;
      const finalXp = overrides[name]?.xp !== undefined ? overrides[name].xp : xpMap[name];
      return {
        originalName: name,
        name: finalName,
        xp: finalXp
      };
    }).sort((a, b) => b.xp - a.xp);

    board.forEach((item, idx) => { item.rank = idx + 1; });
    
    const topThree = board.slice(0, 3);
    const currentRank = currentUser.role === 'student' 
      ? board.find(item => item.name === currentUser.name) || { rank: board.length + 1, xp: 0, name: currentUser.name }
      : null;
      
    const gapToTopThree = (topThree.length >= 3 && currentRank && currentRank.rank > 3) 
      ? topThree[2].xp - currentRank.xp 
      : 0;

    return { activeLeaderboard: board, topThree, currentRank, gapToTopThree };
  }, [users, assignments, codingTests, currentUser, overrides]);

  return (
    <section className="leaderboard-workspace">
      <div className="leaderboard-header-dramatic">
        <div className="header-glint"></div>
        <div className="header-content-lb">
          <h1><Crown size={42} color="#fbbf24" strokeWidth={1.5} /> Global Leaderboard</h1>
          <p>The ultimate arena of academic excellence. Only the best rise to the top.</p>
        </div>
        <div className="header-stars">
          <Sparkles size={24} color="#fcd34d" className="star-anim star-1" />
          <Star size={16} color="#fbbf24" className="star-anim star-2" />
          <Zap size={20} color="#f59e0b" className="star-anim star-3" />
        </div>
      </div>

      <div className="leaderboard-arena">
        {currentUser.role === 'student' && (
          <div className="personal-status-dramatic">
            <div className="status-glow"></div>
            <div className="status-content">
              <span className="eyebrow-dramatic">Your Current Standing</span>
              <h2>Rank #{currentRank.rank}</h2>
              <div className="xp-badge-dramatic">
                <Flame size={18} color="#ef4444" />
                <span>{currentRank.xp} XP Collected</span>
              </div>
              
              {currentRank.rank <= 3 ? (
                <div className="status-message success">
                  <Trophy size={16} /> You are in the Elite Top 3! Keep it up!
                </div>
              ) : (
                <div className="status-message push">
                  <Award size={16} /> {gapToTopThree} XP needed to break into the Top 3.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Dramatic Podium */}
        {topThree.length > 0 && (
          <div className="dramatic-podium-container">
            <div className="podium-spot spot-2">
              <div className="spot-avatar silver"><Medal size={32} color="#94a3b8" /></div>
              <div className="spot-name">{topThree[1]?.name || '---'}</div>
              <div className="spot-xp">{topThree[1]?.xp || 0} XP</div>
              <div className="spot-base base-2"><span>2</span></div>
            </div>
            
            <div className="podium-spot spot-1">
              <Crown size={48} color="#fbbf24" className="crown-icon" />
              <div className="spot-avatar gold"><Trophy size={40} color="#fbbf24" /></div>
              <div className="spot-name">{topThree[0]?.name || '---'}</div>
              <div className="spot-xp">{topThree[0]?.xp || 0} XP</div>
              <div className="spot-base base-1"><span>1</span></div>
            </div>
            
            <div className="podium-spot spot-3">
              <div className="spot-avatar bronze"><Medal size={28} color="#b45309" /></div>
              <div className="spot-name">{topThree[2]?.name || '---'}</div>
              <div className="spot-xp">{topThree[2]?.xp || 0} XP</div>
              <div className="spot-base base-3"><span>3</span></div>
            </div>
          </div>
        )}

        {/* The Roster */}
        <div className="roster-container-dramatic">
          <div className="roster-header">
            <h3>Full Rankings</h3>
            <span>{activeLeaderboard.length} contenders</span>
          </div>
          <div className="roster-list">
            {activeLeaderboard.map((item) => (
              <div className={`roster-row ${item.name === currentUser.name ? 'is-me' : ''} ${item.rank <= 3 ? 'is-top' : ''}`} key={item.name}>
                <div className="row-rank">
                  {item.rank === 1 && <Crown size={20} color="#fbbf24" />}
                  {item.rank === 2 && <Medal size={20} color="#94a3b8" />}
                  {item.rank === 3 && <Medal size={20} color="#b45309" />}
                  {item.rank > 3 && <span>#{item.rank}</span>}
                </div>
                <div className="row-details">
                  <strong>{item.name}</strong>
                  {item.name === currentUser.name && <span className="me-badge">You</span>}
                </div>
                <div className="row-score">
                  {item.xp} <span className="xp-label">XP</span>
                </div>
                {(currentUser.role === 'admin' || currentUser.role === 'Administrator') && (
                  <div className="row-admin-actions">
                    <button className="lb-edit-btn" onClick={() => handleEdit(item.originalName, item.xp)} title="Edit Player">
                      <Edit2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            ))}
            {activeLeaderboard.length === 0 && (
              <div className="empty-roster">No XP data available yet. Start grading assignments!</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

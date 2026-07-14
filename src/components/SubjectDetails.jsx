import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, ArrowLeft, BookOpen, Layers } from "lucide-react";
import MaterialPreview from "./MaterialPreview.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function SubjectDetails({ subject, onBack }) {
  const [openChapters, setOpenChapters] = useState([0]); // first chapter open by default
  
  const toggleChapter = (index) => {
    if (openChapters.includes(index)) {
      setOpenChapters(openChapters.filter(i => i !== index));
    } else {
      setOpenChapters([...openChapters, index]);
    }
  };

  return (
    <section className="role-view" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <button 
        type="button" 
        onClick={onBack} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', color: '#64748b', cursor: 'pointer', padding: '0 0 24px 0', fontSize: '15px' }}
      >
        <ArrowLeft size={18} /> Back to Subjects
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{subject.title}</h2>
          <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '15px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={16} /> Instructor: {subject.instructor}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Layers size={16} /> {subject.chapters?.length || 0} Chapters</span>
          </div>
        </div>
        
        <div style={{ background: 'white', padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--line)', width: '250px' }}>
          <strong style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#475569' }}>Course Progress</strong>
          <ProgressBar value={subject.progress || 0} label={`${subject.progress || 0}% Completed`} tone="green" />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {(!subject.chapters || subject.chapters.length === 0) && (
          <div style={{ padding: '48px', textAlign: 'center', background: 'white', borderRadius: '12px', border: '1px solid var(--line)', color: '#64748b' }}>
            No chapters available yet for this subject.
          </div>
        )}
        
        {subject.chapters && subject.chapters.map((chapter, idx) => (
          <div key={idx} style={{ background: 'white', borderRadius: '12px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <button 
              type="button"
              onClick={() => toggleChapter(idx)}
              style={{ width: '100%', padding: '20px 24px', background: 'white', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#f8fafc', color: '#64748b', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', placeItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px' }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1e293b', margin: 0 }}>{chapter.title}</h3>
              </div>
              <span style={{ color: '#94a3b8' }}>
                {openChapters.includes(idx) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </span>
            </button>
            
            {openChapters.includes(idx) && (
              <div style={{ padding: '0 24px 24px 24px', borderTop: '1px solid #f1f5f9' }}>
                {(!chapter.materials || chapter.materials.length === 0) && (
                  <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '16px', fontStyle: 'italic' }}>No materials in this chapter.</p>
                )}
                
                {chapter.materials && chapter.materials.map((mat, midx) => (
                  <MaterialPreview key={midx} material={mat} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {subject.materials && subject.materials.length > 0 && (!subject.chapters || subject.chapters.length === 0) && (
         <div style={{ marginTop: '32px', background: 'white', borderRadius: '12px', border: '1px solid var(--line)', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Legacy Materials (Uncategorized)</h3>
            {subject.materials.map((mat, midx) => (
              <MaterialPreview key={midx} material={{ title: mat.title, url: mat.fileUrl, type: mat.fileUrl.endsWith('.pdf') ? 'pdf' : 'link' }} />
            ))}
         </div>
      )}
    </section>
  );
}

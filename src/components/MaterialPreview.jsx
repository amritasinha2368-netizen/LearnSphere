import React from 'react';
import { PlayCircle, FileText, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';

function getYoutubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function MaterialPreview({ material }) {
  const { title, url: providedUrl, fileUrl, type } = material;
  const url = providedUrl || fileUrl;
  
  if (!url) return <div style={{ padding: '12px', color: 'red' }}>Error: Material missing URL</div>;

  const ytId = getYoutubeId(url);
  
  if (ytId) {
    return (
      <div style={{ marginTop: '12px', border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden', background: '#000' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src={`https://www.youtube.com/embed/${ytId}`} 
            title={title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div style={{ padding: '12px', background: 'white', borderTop: '1px solid var(--line)' }}>
          <strong style={{ display: 'block', fontSize: '15px' }}>{title || "Video Material"}</strong>
        </div>
      </div>
    );
  }
  
  let Icon = LinkIcon;
  let color = '#3b82f6';
  
  if (type === 'video') { Icon = PlayCircle; color = '#ef4444'; }
  else if (type === 'pdf') { Icon = FileText; color = '#f59e0b'; }
  else if (type === 'image') { Icon = ImageIcon; color = '#10b981'; }

  return (
    <a href={url} target="_blank" rel="noreferrer" style={{ 
      display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', 
      background: 'white', border: '1px solid var(--line)', borderRadius: '8px', 
      marginTop: '12px', textDecoration: 'none', color: 'inherit',
      transition: 'box-shadow 0.2s',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'}
    >
      <div style={{ background: `${color}15`, color: color, padding: '12px', borderRadius: '8px', display: 'flex', placeItems: 'center' }}>
        <Icon size={24} />
      </div>
      <div>
        <strong style={{ display: 'block', fontSize: '15px' }}>{title || "Attached Material"}</strong>
        <span style={{ fontSize: '13px', color: '#64748b' }}>Click to open {type || 'link'}</span>
      </div>
    </a>
  );
}

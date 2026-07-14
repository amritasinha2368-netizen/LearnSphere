import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, ArrowLeft, BookOpen, Layers, Plus, Link as LinkIcon, UploadCloud, Video, Image as ImageIcon, Trash2 } from "lucide-react";
import MaterialPreview from "./MaterialPreview.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function SubjectDetails({ subject, onBack, role = 'student' }) {
  const [openChapters, setOpenChapters] = useState([0]);
  const [localSubject, setLocalSubject] = useState(subject);
  
  // Chapter creation state
  const [isAddingChapter, setIsAddingChapter] = useState(false);
  const [newChapterTitle, setNewChapterTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Material creation state
  const [addingMaterialTo, setAddingMaterialTo] = useState(null); // chapter _id
  const [matType, setMatType] = useState('video');
  const [matTitle, setMatTitle] = useState('');
  const [matUrl, setMatUrl] = useState('');
  const [matFile, setMatFile] = useState(null);

  const canManage = role === 'admin' || role === 'teacher';

  const handleDeleteChapter = async (e, chapterId) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this chapter?")) return;
    
    try {
      const res = await fetch('/api/lms-data?type=subjects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete_chapter',
          subjectId: localSubject.id || localSubject._id,
          chapterId: chapterId
        })
      });
      if (res.ok) {
        const updated = await res.json();
        setLocalSubject(updated);
      }
    } catch (err) { console.error(err); }
  };

  const handleAddChapter = async (e) => {
    e.preventDefault();
    if (!newChapterTitle.trim()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/lms-data?type=subjects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add_chapter',
          subjectId: localSubject.id || localSubject._id,
          title: newChapterTitle
        })
      });
      if (res.ok) {
        const updated = await res.json();
        setLocalSubject(updated);
        setNewChapterTitle("");
        setIsAddingChapter(false);
      }
    } catch (err) { console.error(err); }
    setIsSubmitting(false);
  };

  const handleAddMaterial = async (e, chapterId) => {
    e.preventDefault();
    if (!matTitle.trim()) return;
    setIsSubmitting(true);
    try {
      let finalUrl = matUrl;
      
      // Upload file if it's pdf/image
      if ((matType === 'pdf' || matType === 'image') && matFile) {
        const fd = new FormData();
        fd.append('file', matFile);
        const uploadRes = await fetch('/api/upload', { method: 'POST', body: fd });
        if (uploadRes.ok) {
          const { fileUrl } = await uploadRes.json();
          finalUrl = fileUrl;
        }
      }

      const res = await fetch('/api/lms-data?type=subjects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add_chapter_material',
          subjectId: localSubject.id || localSubject._id,
          chapterId: chapterId,
          title: matTitle,
          url: finalUrl,
          materialType: matType
        })
      });
      if (res.ok) {
        const updated = await res.json();
        setLocalSubject(updated);
        setAddingMaterialTo(null);
        setMatTitle('');
        setMatUrl('');
        setMatFile(null);
      }
    } catch (err) { console.error(err); }
    setIsSubmitting(false);
  };
  
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
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{localSubject.title}</h2>
          <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '15px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={16} /> Instructor: {localSubject.instructor}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Layers size={16} /> {localSubject.chapters?.length || 0} Chapters</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Course Content</h3>
        {canManage && (
          <button 
            type="button" 
            onClick={() => setIsAddingChapter(!isAddingChapter)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: '#0f172a', 
              color: 'white', 
              border: '2px solid transparent', 
              padding: '10px 18px', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontWeight: 600,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'; }}
          >
            <Plus size={18} /> Add Chapter
          </button>
        )}
      </div>

      {isAddingChapter && (
        <form onSubmit={handleAddChapter} style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', marginBottom: '16px', display: 'flex', gap: '12px' }}>
          <input 
            type="text" 
            value={newChapterTitle} 
            onChange={e => setNewChapterTitle(e.target.value)} 
            placeholder="E.g. Chapter 1: Introduction to Data Structures" 
            style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid var(--line)' }} 
            required 
          />
          <button type="submit" disabled={isSubmitting} style={{ background: 'var(--ink)', color: 'white', padding: '0 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
            {isSubmitting ? 'Saving...' : 'Save Chapter'}
          </button>
        </form>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {(!localSubject.chapters || localSubject.chapters.length === 0) && (
          <div style={{ padding: '48px', textAlign: 'center', background: 'white', borderRadius: '12px', border: '1px solid var(--line)', color: '#64748b' }}>
            No chapters available yet for this subject.
          </div>
        )}
        
        {localSubject.chapters && localSubject.chapters.map((chapter, idx) => (
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {canManage && (
                  <button 
                    type="button"
                    onClick={(e) => handleDeleteChapter(e, chapter.id || chapter._id)}
                    style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', display: 'flex' }}
                    title="Delete chapter"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
                <span style={{ color: '#94a3b8', display: 'flex' }}>
                  {openChapters.includes(idx) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </span>
              </div>
            </button>
            
            {openChapters.includes(idx) && (
              <div style={{ padding: '0 24px 24px 24px', borderTop: '1px solid #f1f5f9' }}>
                {(!chapter.materials || chapter.materials.length === 0) && (
                  <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '16px', fontStyle: 'italic' }}>No materials in this chapter.</p>
                )}
                
                {chapter.materials && chapter.materials.map((mat, midx) => (
                  <MaterialPreview key={midx} material={mat} />
                ))}

                {canManage && addingMaterialTo !== (chapter.id || chapter._id) && (
                  <button 
                    type="button"
                    onClick={() => setAddingMaterialTo(chapter.id || chapter._id)}
                    style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', background: 'transparent', color: 'var(--primary)', border: '1px dashed var(--primary)', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, width: '100%', justifyContent: 'center' }}
                  >
                    <Plus size={16} /> Add Topic / Material
                  </button>
                )}

                {canManage && addingMaterialTo === (chapter.id || chapter._id) && (
                  <form onSubmit={(e) => handleAddMaterial(e, chapter.id || chapter._id)} style={{ marginTop: '16px', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <label style={{ flex: 1, minWidth: '200px' }}>
                        <span style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Topic Title</span>
                        <input type="text" value={matTitle} onChange={e => setMatTitle(e.target.value)} required placeholder="E.g. Lecture 1 Video" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--line)' }} />
                      </label>
                      <label style={{ flex: 1, minWidth: '150px' }}>
                        <span style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Type</span>
                        <select value={matType} onChange={e => setMatType(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--line)' }}>
                          <option value="video">Video Link</option>
                          <option value="link">Other Link</option>
                          <option value="pdf">PDF Document</option>
                          <option value="image">Image</option>
                        </select>
                      </label>
                    </div>

                    {(matType === 'video' || matType === 'link') ? (
                      <label style={{ display: 'block', marginBottom: '16px' }}>
                        <span style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>URL</span>
                        <input type="url" value={matUrl} onChange={e => setMatUrl(e.target.value)} required placeholder="https://youtube.com/..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--line)' }} />
                      </label>
                    ) : (
                      <label style={{ display: 'block', marginBottom: '16px' }}>
                        <span style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Upload File</span>
                        <input type="file" onChange={e => setMatFile(e.target.files[0])} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px dashed var(--line)', background: 'white' }} />
                      </label>
                    )}

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                      <button type="button" onClick={() => setAddingMaterialTo(null)} style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontWeight: 600, padding: '8px 16px' }}>Cancel</button>
                      <button type="submit" disabled={isSubmitting} style={{ background: 'var(--primary)', color: 'white', padding: '8px 24px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                        {isSubmitting ? 'Uploading...' : 'Save Material'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {localSubject.materials && localSubject.materials.length > 0 && (!localSubject.chapters || localSubject.chapters.length === 0) && (
         <div style={{ marginTop: '32px', background: 'white', borderRadius: '12px', border: '1px solid var(--line)', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Legacy Materials (Uncategorized)</h3>
            {localSubject.materials.map((mat, midx) => (
              <MaterialPreview key={midx} material={{ title: mat.title, url: mat.fileUrl, type: mat.fileUrl.endsWith('.pdf') ? 'pdf' : 'link' }} />
            ))}
         </div>
      )}
    </section>
  );
}

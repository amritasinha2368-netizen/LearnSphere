import { useState, useRef, useEffect } from "react";
import { CheckCircle2, X, UploadCloud, FileImage, Loader2 } from "lucide-react";
import { uploadFileToCloud } from "../services/cloudStorage.js";

export default function ActionModal({ action, onClose, onSubmit }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [uploadedCloudUrl, setUploadedCloudUrl] = useState(null);
  
  // Controlled inputs
  const [noteText, setNoteText] = useState("");
  const [writeTitle, setWriteTitle] = useState("");
  const [writeBody, setWriteBody] = useState("");
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!action) {
      setFile(null);
      setPreviewUrl(null);
      setUploadProgress(0);
      setUploadStatus("idle");
      setUploadedCloudUrl(null);
      setNoteText("");
      setWriteTitle("");
      setWriteBody("");
    }
  }, [action]);

  if (!action) return null;

  function handleFileDrop(e) {
    e.preventDefault();
    if (uploadStatus === "uploading" || uploadStatus === "success") return;
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) processFile(droppedFile);
  }

  function handleFileSelect(e) {
    if (uploadStatus === "uploading" || uploadStatus === "success") return;
    const selectedFile = e.target.files[0];
    if (selectedFile) processFile(selectedFile);
  }

  function processFile(selectedFile) {
    setFile(selectedFile);
    setUploadStatus("idle");
    setUploadProgress(0);
    setUploadedCloudUrl(null);
    if (selectedFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  }

  async function handleCloudUpload() {
    if (!file || uploadStatus === "uploading") return;
    setUploadStatus("uploading");
    try {
      const url = await uploadFileToCloud(file, (progress) => {
        setUploadProgress(progress);
      });
      setUploadedCloudUrl(url);
      setUploadStatus("success");
    } catch (err) {
      console.error(err);
      setUploadStatus("error");
    }
  }

  function handleDone() {
    if (onSubmit) {
      const data = {
        fileUrl: uploadedCloudUrl,
        note: noteText,
        title: writeTitle,
        body: writeBody
      };
      onSubmit(data);
    }
    onClose();
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="action-modal" role="dialog" aria-modal="true" aria-labelledby="action-modal-title" onClick={(event) => event.stopPropagation()}>
        <header>
          <div>
            <p className="eyebrow">{action.kicker}</p>
            <h2 id="action-modal-title">{action.title}</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </header>

        {action.description && <p className="modal-description">{action.description}</p>}

        {action.details?.length ? (
          <div className="modal-detail-grid">
            {action.details.map((detail) => (
              <div key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        ) : null}

        {action.type === "upload" && (
          <div className="modal-form cloud-upload-form">
            <div 
              className={`cloud-dropzone ${uploadStatus}`} 
              onDragOver={(e) => e.preventDefault()} 
              onDrop={handleFileDrop}
              onClick={() => uploadStatus === "idle" && fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileSelect} 
                className="hidden-file-input" 
                style={{ display: "none" }}
              />
              
              {uploadStatus === "idle" && !file && (
                <div className="dropzone-prompt">
                  <UploadCloud size={32} />
                  <strong>Drag & drop file here</strong>
                  <span>or click to browse local files</span>
                  <em>Supports images, PDFs, and code files</em>
                </div>
              )}

              {uploadStatus === "idle" && file && (
                <div className="dropzone-preview">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="file-preview-img" />
                  ) : (
                    <FileImage size={40} className="file-preview-icon" />
                  )}
                  <div className="file-info">
                    <strong>{file.name}</strong>
                    <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                  <button type="button" className="ghost-button upload-trigger-btn" onClick={(e) => { e.stopPropagation(); handleCloudUpload(); }}>
                    Upload to Cloud
                  </button>
                </div>
              )}

              {uploadStatus === "uploading" && (
                <div className="dropzone-uploading">
                  <Loader2 size={32} className="spinning-icon" />
                  <strong>Uploading to Cloud Storage...</strong>
                  <div className="upload-progress-bar">
                    <div className="upload-progress-fill" style={{ width: `${uploadProgress}%` }} />
                  </div>
                  <span>{Math.round(uploadProgress)}%</span>
                </div>
              )}

              {uploadStatus === "success" && (
                <div className="dropzone-success">
                  <CheckCircle2 size={40} className="success-icon" />
                  <strong>Upload Complete!</strong>
                  <a href={uploadedCloudUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>View File in Cloud</a>
                </div>
              )}
            </div>

            <label>
              {action.noteLabel || "Student note"}
              <textarea 
                placeholder={action.notePlaceholder || "Add a short note for your teacher"} 
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
            </label>
          </div>
        )}

        {action.type === "write" && (
          <div className="modal-form write-content-form">
            <label>
              {action.writeTitleLabel || "Content Title"}
              <input 
                type="text" 
                placeholder={action.writeTitlePlaceholder || "Enter title..."} 
                value={writeTitle}
                onChange={(e) => setWriteTitle(e.target.value)}
              />
            </label>
            <label className="rich-text-label">
              {action.writeBodyLabel || "Content Body"}
              <textarea 
                className="rich-text-area" 
                placeholder={action.writeBodyPlaceholder || "Write your content here..."} 
                rows={12} 
                value={writeBody}
                onChange={(e) => setWriteBody(e.target.value)}
              />
            </label>
          </div>
        )}

        {action.type === "quiz" && (
          <form className="quiz-attempt-form">
            {action.questions?.map((question, questionIndex) => (
              <fieldset className="quiz-question" key={question.prompt}>
                <legend>
                  <span>Question {questionIndex + 1}</span>
                  {question.prompt}
                </legend>
                <div className="quiz-options">
                  {question.options.map((option, optionIndex) => (
                    <label key={option}>
                      <input name={`question-${questionIndex}`} type="radio" required={optionIndex === 0} />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </form>
        )}

        {action.type === "schedule" && (
          <div className="modal-form">
            <label>
              Class title
              <input defaultValue={action.prefill?.title || ""} />
            </label>
            <label>
              Date and time
              <input defaultValue={action.prefill?.time || ""} />
            </label>
            <label>
              Room or meeting link
              <input defaultValue={action.prefill?.room || ""} />
            </label>
          </div>
        )}

        {action.type === "marks" && (
          <div className="modal-form">
            <label>
              Marks status
              <input defaultValue={action.prefill?.status || "Ready to publish"} />
            </label>
            <label>
              Feedback note
              <textarea placeholder="Add feedback or publishing remarks" />
            </label>
          </div>
        )}

        <footer>
          <button className="ghost-button" type="button" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="primary-button modal-primary" 
            type="button" 
            onClick={handleDone} 
            disabled={action.type === "upload" && uploadStatus !== "success"}
          >
            <CheckCircle2 size={18} />
            {action.primaryLabel || "Done"}
          </button>
        </footer>
      </section>
    </div>
  );
}

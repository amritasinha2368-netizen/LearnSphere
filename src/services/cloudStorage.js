/**
 * Cloud Storage Service
 * 
 * Connects to the Express backend (/api/upload).
 * The backend handles streaming the file directly to AWS S3 (if configured)
 * or saving it to local disk as a fallback.
 */

export async function uploadFileToCloud(file, onProgress) {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error("No file provided for upload."));
    }

    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // Direct Unsigned Upload Preset

    // Track upload progress
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        if (onProgress) onProgress(percentComplete);
      }
    });

    // Handle response
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve(response.fileUrl);
        } catch (e) {
          reject(new Error("Invalid response from server"));
        }
      } else {
        reject(new Error(`Server responded with ${xhr.status}: ${xhr.statusText}`));
      }
    });

    // Handle errors
    xhr.addEventListener("error", () => {
      reject(new Error("Network error occurred during upload."));
    });

    // Send the request to our backend
    xhr.open("POST", "/api/upload", true);
    xhr.send(formData);
  });
}

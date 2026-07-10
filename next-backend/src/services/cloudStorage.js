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
          // Return the secure cloud URL generated directly by Cloudinary
          resolve(response.secure_url);
        } catch (e) {
          reject(new Error("Invalid response from Cloudinary"));
        }
      } else {
        reject(new Error(`Cloudinary responded with ${xhr.status}: ${xhr.statusText}`));
      }
    });

    // Handle errors
    xhr.addEventListener("error", () => {
      reject(new Error("Network error occurred during direct Cloudinary upload."));
    });

    // Send the request directly to Cloudinary (Bypassing backend entirely)
    xhr.open("POST", "https://api.cloudinary.com/v1_1/gkv58by2/image/upload", true);
    xhr.send(formData);
  });
}

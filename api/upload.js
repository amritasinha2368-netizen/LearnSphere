import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  const form = formidable({});
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "File parse error" });
    }
    
    // Accommodate array or single file
    const fileArray = Array.isArray(files.file) ? files.file : [files.file];
    const file = fileArray[0];
    
    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }
    
    try {
      const isImageOrVideo = file.mimetype && (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/'));
      const rType = isImageOrVideo ? 'auto' : 'raw';
      
      const uploadResult = await cloudinary.uploader.upload(file.filepath, { 
        folder: 'lms-uploads', 
        resource_type: rType 
      });
      return res.status(200).json({ fileUrl: uploadResult.secure_url });
    } catch (uploadErr) {
      console.error("Cloudinary Upload Error:", uploadErr);
      return res.status(500).json({ error: "Upload failed" });
    }
  });
}

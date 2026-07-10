import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Setup CORS Headers for the response
const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // Allows your Vite React frontend to connect
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle CORS Preflight request
export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400, headers: corsHeaders });
        }

        // Convert the web File to a Node Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload stream to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'lms-uploads' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            // End the stream with the buffer
            uploadStream.end(buffer);
        });

        console.log("✅ Next.js Cloudinary Upload Success:", uploadResult.secure_url);

        return NextResponse.json(
            { fileUrl: uploadResult.secure_url },
            { status: 200, headers: corsHeaders }
        );

    } catch (error) {
        console.error("Next.js Cloudinary Error:", error);
        return NextResponse.json(
            { error: "Upload failed" },
            { status: 500, headers: corsHeaders }
        );
    }
}

import type { Handler } from '@netlify/functions';

const CLOUDINARY_CLOUD_NAME = process.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const CLOUDINARY_FOLDER = process.env.VITE_CLOUDINARY_FOLDER || '';

export const handler: Handler = async () => {
  if (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET || !CLOUDINARY_CLOUD_NAME) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Cloudinary credentials not configured' }),
    };
  }

  try {
    // Use Cloudinary Admin API to list resources
    const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString('base64');
    
    const params = new URLSearchParams({
      type: 'upload',
      max_results: '500',
      context: 'true', // Include contextual metadata
    });
    
    if (CLOUDINARY_FOLDER) {
      params.append('prefix', CLOUDINARY_FOLDER + '/');
    }
    
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image?${params}`;

    console.log('Fetching from Cloudinary:', url);

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cloudinary error:', response.status, errorText);
      throw new Error(`Cloudinary API error: ${response.status}`);
    }

    const data = await response.json();

    const images = data.resources.map((img: any) => {
      const publicId = img.public_id;
      
      // Build optimized Cloudinary URLs with transformations
      const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
      
      // Check for contextual metadata in both possible locations
      const title = img.context?.custom?.title || img.context?.title || extractTitle(publicId);
      const alt = img.context?.custom?.alt || img.context?.alt || extractTitle(publicId);
      const category = img.context?.custom?.category || img.context?.category || 'Gallery';
      
      return {
        id: publicId,
        src: `${baseUrl}/f_auto,q_auto/${publicId}`, // Auto format & quality
        alt,
        title,
        category,
        width: img.width,
        height: img.height,
      };
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
      body: JSON.stringify({ images }),
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch images' }),
    };
  }
};

function extractTitle(publicId: string): string {
  const fileName = publicId.split('/').pop() || '';
  return fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

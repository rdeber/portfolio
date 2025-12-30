// Cloudinary configuration and utilities

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
  context?: {
    custom?: {
      alt?: string;
      title?: string;
      category?: string;
    };
  };
}

// Replace these with your Cloudinary credentials
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name';
const CLOUDINARY_FOLDER = import.meta.env.VITE_CLOUDINARY_FOLDER || 'portfolio-gallery';

/**
 * Fetch all images from Cloudinary via Netlify Function
 */
export async function fetchCloudinaryImages() {
  try {
    const response = await fetch('/.netlify/functions/get-gallery-images');
    
    if (!response.ok) {
      console.warn('Could not fetch Cloudinary images from function');
      return [];
    }

    const data = await response.json();
    console.log('✅ Loaded', data.images?.length || 0, 'images from Cloudinary');
    
    return data.images || [];
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return [];
  }
}

/**
 * Generate Cloudinary URL with transformations
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
  } = {}
) {
  const { width, height, quality = 'auto', format = 'auto' } = options;
  
  let transformations = [`q_${quality}`, `f_${format}`];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations.join(',')}/${publicId}`;
}

/**
 * Extract a readable title from public_id
 */
function extractTitle(publicId: string): string {
  const fileName = publicId.split('/').pop() || '';
  return fileName
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[-_]/g, ' ') // Replace dashes/underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize words
}

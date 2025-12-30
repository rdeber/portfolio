// Cloudinary configuration and utilities

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

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('Netlify Function not available (not deployed or preview mode)');
      return [];
    }

    const data = await response.json();
    console.log('✅ Loaded', data.images?.length || 0, 'images from Cloudinary');
    
    return data.images || [];
  } catch (error) {
    console.warn('Netlify Functions unavailable - using fallback images');
    return [];
  }
}

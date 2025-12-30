import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { fallbackImages } from '../data/gallery';
import { fetchCloudinaryImages } from '../utils/cloudinary';
import type { GalleryImage } from '../types';

const Gallery = () => {
  const [filter, setFilter] = useState<string>('All');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

  // Load images from Cloudinary
  useEffect(() => {
    const loadImages = async () => {
      const cloudinaryImages = await fetchCloudinaryImages();
      
      if (cloudinaryImages.length > 0) {
        setImages(cloudinaryImages);
      } else {
        // Only use fallback if Cloudinary fails
        setImages(fallbackImages);
      }
      
      setIsLoading(false);
    };

    loadImages();
  }, []);

  const categories = ['All', ...Array.from(new Set(images.map((img) => img.category).filter((cat): cat is string => cat !== undefined)))];

  const filteredImages =
    filter === 'All' ? images : images.filter((img) => img.category === filter);

  // Reinitialize PhotoSwipe when filter or images change
  useEffect(() => {
    if (lightboxRef.current) {
      lightboxRef.current.destroy();
    }
    
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery-grid',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      bgOpacity: 0.95,
      showHideAnimationType: 'zoom',
    });
    lightbox.init();
    lightboxRef.current = lightbox;
    
    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, [filter, images]);

  return (
    <div className="min-h-screen py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gradient">Gallery</h1>
          <p className="text-neutral-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore a curated collection of my work across various photography styles and subjects.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
                    : 'glass-card text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div id="gallery-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => {
              const aspectRatio = image.width / image.height;
              return (
                <motion.a
                  key={image.id}
                  href={image.src}
                  data-pswp-width={image.width}
                  data-pswp-height={image.height}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-2xl cursor-pointer glass-card block hover:scale-[1.02] transition-all duration-300"
                  style={{ aspectRatio: aspectRatio }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: 'easeOut'
                  }}
                >
                  <img
                    src={image.src.replace('/f_auto,q_auto/', '/f_auto,q_auto,w_800,c_fill/')}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                      {image.category && (
                        <p className="text-sm text-neutral-300 font-medium">{image.category}</p>
                      )}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400 text-xl">No images found in this category.</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Gallery;

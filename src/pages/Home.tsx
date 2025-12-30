import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const prefersReducedMotion = useReducedMotion();

  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.1),transparent_50%)]" />
        
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=1920&q=75"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            decoding="async"
            style={{ willChange: 'auto' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-8">
              <Camera size={18} className="text-primary-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Professional Photography</span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight"
          >
            Capturing Moments,
            <br />
            <span className="text-gradient">Creating Stories</span>
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Professional photographer specializing in landscape, portrait, and commercial photography.
            Bringing your vision to life through the lens.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/gallery"
              className="btn btn-primary group px-8 py-4 text-lg"
            >
              View Gallery
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary px-8 py-4 text-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {!prefersReducedMotion && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-7 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="scroll-indicator" />
            </div>
          </div>
        )}
      </section>

      {/* Featured Work Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Featured Work</h2>
              <p className="text-neutral-400 text-xl max-w-3xl mx-auto leading-relaxed">
                A selection of recent projects showcasing diverse photography styles and techniques.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, src: 'https://images.unsplash.com/photo-1682687221363-72518513620e?auto=format&fit=crop&w=800&q=75', title: 'Architecture', desc: 'Modern Structures' },
              { id: 2, src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&w=800&q=75', title: 'Portrait', desc: 'Emotional Depth' },
              { id: 3, src: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=75', title: 'Landscape', desc: 'Natural Beauty' },
            ].map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{ willChange: 'auto' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{image.desc}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/gallery" className="btn btn-primary px-10 py-4 text-lg">
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-black to-accent-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[150px]" />
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let's Create Something
              <br />
              <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-neutral-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Whether it's a portrait session, event coverage, or commercial project,
              I'm here to bring your vision to life with creativity and precision.
            </p>
            <Link to="/contact" className="btn btn-primary px-10 py-4 text-lg group">
              Start a Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

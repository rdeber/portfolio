import { motion } from 'framer-motion';
import { Award, Camera, Users, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Camera, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Award, label: 'Awards Won', value: '15' },
    { icon: Heart, label: 'Years Experience', value: '10+' },
  ];

  const skills = [
    'Portrait Photography',
    'Landscape Photography',
    'Commercial Photography',
    'Event Coverage',
    'Product Photography',
    'Photo Editing',
    'Lighting Design',
    'Creative Direction',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Hello, I'm a
                <br />
                <span className="text-gradient">Professional Photographer</span>
              </h1>
              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                With over a decade of experience, I've dedicated my career to capturing the beauty
                and emotion in every moment. My work spans across various genres of photography,
                from intimate portraits to sweeping landscapes.
              </p>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                I believe that great photography is about more than just technical skill—it's about
                connecting with people, understanding their vision, and creating images that tell
                compelling stories.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/contact" className="btn btn-primary px-8 py-4">
                  Work With Me
                </a>
                <a href="/gallery" className="btn btn-secondary px-8 py-4">
                  View Portfolio
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
                  alt="Photographer portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl">
                <p className="text-5xl font-bold text-gradient mb-2">10+</p>
                <p className="text-neutral-300 font-medium">Years of Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl mb-6">
                  <stat.icon className="text-primary-400" size={32} />
                </div>
                <p className="text-5xl font-bold text-gradient mb-3">{stat.value}</p>
                <p className="text-neutral-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-accent-950/10 to-black" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Expertise</h2>
            <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
              A diverse skill set developed through years of professional practice and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <p className="font-semibold text-white group-hover:text-gradient transition-all">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="container-custom max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient">My Philosophy</h2>
            <div className="space-y-8 text-lg text-neutral-300 text-left leading-relaxed">
              <p className="text-xl">
                Photography, for me, is more than a profession—it's a way of seeing the world.
                Every shoot is an opportunity to discover something new, to find beauty in unexpected
                places, and to create lasting memories.
              </p>
              <p>
                I approach each project with fresh eyes and an open mind, always striving to understand
                my clients' unique needs and vision. Whether I'm photographing a wedding, a corporate
                event, or a landscape, my goal is always the same: to create images that resonate on
                an emotional level.
              </p>
              <p>
                Technology and technique are important, but they're just tools. What really matters
                is the connection between the photographer, the subject, and the moment. That's where
                the magic happens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-black to-accent-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[150px]" />
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let's Work
              <br />
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-neutral-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              I'm always excited to take on new projects and collaborate with creative individuals.
              Get in touch to discuss how we can work together.
            </p>
            <a href="/contact" className="btn btn-primary px-10 py-4 text-lg">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '../types';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Submit to Netlify Forms
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@lens.photography',
      href: 'mailto:hello@lens.photography',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <div className="min-h-screen py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Let's Create
              <br />
              <span className="text-gradient">Something Amazing</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-16 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Fill out the form and I'll get back
              to you as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-2 uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-neutral-300 hover:text-white transition-colors text-lg"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-neutral-300 text-lg">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 inline-flex items-center space-x-3 glass-card px-6 py-3 rounded-full"
            >
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-green-400">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card rounded-3xl p-10 space-y-6"
              data-netlify="true"
              name="contact"
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Name
                </label>
                <motion.div
                  animate={{
                    scale: focusedField === 'name' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    {...register('name')}
                    id="name"
                    name="name"
                    type="text"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="input"
                    placeholder="John Doe"
                  />
                </motion.div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Email
                </label>
                <motion.div
                  animate={{
                    scale: focusedField === 'email' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    {...register('email')}
                    id="email"
                    name="email"
                    type="email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="input"
                    placeholder="john@example.com"
                  />
                </motion.div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Subject
                </label>
                <motion.div
                  animate={{
                    scale: focusedField === 'subject' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    {...register('subject')}
                    id="subject"
                    name="subject"
                    type="text"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="input"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.subject.message}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Message
                </label>
                <motion.div
                  animate={{
                    scale: focusedField === 'message' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    {...register('message')}
                    id="message"
                    name="message"
                    rows={6}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed py-4 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={22} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-4 rounded-xl"
                >
                  <CheckCircle size={24} />
                  <span className="font-semibold">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

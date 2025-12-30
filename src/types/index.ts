export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category?: string;
  width: number;
  height: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

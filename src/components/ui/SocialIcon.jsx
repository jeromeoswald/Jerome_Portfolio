import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const icons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  x: FaXTwitter,
  email: Mail,
};

export default function SocialIcon({ name, className = 'h-[18px] w-[18px]' }) {
  const Icon = icons[name] ?? Mail;
  return <Icon className={className} aria-hidden="true" />;
}

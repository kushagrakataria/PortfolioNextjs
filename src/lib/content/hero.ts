import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Kushagra Kataria.',
  tagline: 'Web Developer & Designer.',
  description:
    "A curious engineering student with a passion for problem-solving. Whether it’s circuits, code, or coffee, count me in! 🚀🔌☕",
  specialText: 'Available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
    { name: 'cp assignment', url: 'https://docs.google.com/document/d/1DMVKMQdt8mIMe2e1kM41S-4sM-qpsXqf_pEJTMw-5x8/edit?usp=sharing' },

  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

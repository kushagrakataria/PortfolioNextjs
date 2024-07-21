import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'GRAPHITILE',
      description: 'Making day to day products with recycled carbon:',
      tasks:
        "A method to turn waste carbon into usefull products, that may efficiently handle the issue of waste management and carbon emissions while producing a lasting and valued product.",
      url: 'https://drive.google.com/file/d/1ekUYmSmbLW0evfBRg8IuNjID-TMFPM7j/view',
      img: 'https://github.com/kushagrakataria/PortfolioNextjs/blob/main/public/images/graphitile.jpg?raw=true',
      tags: [
        'Research Paper',
        'Chemistry',
        'Environment Science',
      ],
    },
    {
      id: getId(),
      name: 'SOUNDIFY',
      description:
        'IT FEST, DPS GREATER FARIDABAD',
      tasks:
        'Simple Website that explains the concept of sound, its properties and provides various sound tools for different purposes.',
      url: 'https://soundify1.netlify.app/',
      img: 'https://github.com/kushagrakataria/PortfolioNextjs/blob/main/public/images/soundify.png?raw=true',
      tags: ['HTML/CSS', 'Js'],
    },
    {
      id: getId(),
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
    {
      id: getId(),
      name: 'Arcade Vista Interiors',
      description: 'Website for Arcade Vista Interiors LLC.',
      tasks:
        'Developed responsive website using HTML, CSS, and Bootstrap.',
      url: 'https://arcadevistainteriors.com/',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
      tags: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    },
  ],
};

export default featuredProjectsSection;

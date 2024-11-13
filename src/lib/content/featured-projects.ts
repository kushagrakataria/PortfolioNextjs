import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Arcade Vista Interiors',
      description: 'Website for Arcade Vista Interiors LLC.',
      tasks:
        'Developed responsive website using HTML, CSS, and Bootstrap.',
      url: 'https://arcadevistainteriors.com/',
      img: 'https://github.com/kushagrakataria/PortfolioNextjs/blob/main/public/images/arcadevista.png?raw=true',
      tags: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    },
    {
      id: getId(),
      name: 'NSUTTHON',
      description: 'Frontend for a bot made in NSUTTHON, Hackathon',
      tasks:
        'Made a frontend for a bot that was made in NSUTTHON, Hackathon',
      url: 'https://fixerbot.netlify.app',
      img: 'https://github.com/kushagrakataria/PortfolioNextjs/blob/main/public/images/arcadevista.png?raw=true',
      tags: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    },
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
      name: 'DEWA',
      description: 'Car Charging Bot',
      tasks:
        'Made a varible charging bot enabled by AI and robotics that can charge the parked car ',
      url: 'https://www.youtube.com/watch?v=biVpq5wru4c',
      img: 'https://github.com/kushagrakataria/PortfolioNextjs/blob/main/public/images/DEWA.jpg?raw=true',
      tags: ['AI/ML', 'Python', 'Raspberry Pi', 'Robotics',],
    },

  ],
};

export default featuredProjectsSection;

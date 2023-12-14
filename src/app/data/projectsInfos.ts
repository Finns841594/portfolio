import { ProjectInfo } from '../types/types'

// should change gif to video for better performance.
// should try Cloudinary for CDN
export const projectsInfos: ProjectInfo[] = [
  {
    projectTitle: 'Moboga',
    projectDescription:
      "MoboGa is a platform that showcases the interconnectedness between movies, books, and game adaptations of stories for fans. Here, you can delve into alternate dimensions of your favorite stories. For instance, if you're an avid reader and viewer of the Harry Potter series, you may also enjoy exploring the world of Harry Potter video games.",
    projectImageLink: '/moboga.gif',
    projectSubDescription: 'MOvies, BOoks and GAmes',
    projectUrl: 'http://moboga.netlify.app',
    projectGithubUrl: 'https://github.com/Finns841594/moboga',
    projectTechStacks: ['TypeScript', 'React', 'Express.js', 'GoJS'],
    featuredTechStacks: ['GoJS'],
  },
  {
    projectTitle: 'Talenthub',
    projectDescription:
      'We are building a full-stack application designed to match our database of developers with available jobs in Stockohlm. Our job data is provided by the jobtechdev API.',
    projectImageLink:
      'https://github.com/lups-tech/.github/raw/main/jobtech.gif',
    projectUrl: 'https://job-matches.vercel.app/',
    projectGithubUrl: 'https://github.com/lups-tech',
    projectTechStacks: [
      'TypeScript',
      'React',
      'Vite',
      '.NET',
      'TailwindCSS',
      'MUI',
      'Auth0',
      'Supabase',
    ],
    featuredTechStacks: ['TypeScript'],
  },
  {
    projectTitle: 'Multi-Currency Accounting',
    projectDescription:
      'This app can help you record your costs in different currencies(as many as you want!). And you can specify one main currency, so all the costs will be summed up into nominated currency by the exchange rates of that day.',
    projectImageLink:
      'https://github.com/Finns841594/Currency/raw/master/images/bookkeeping.png',
    projectUrl: 'currencyappf.azurewebsites.net',
    projectGithubUrl: 'https://github.com/Finns841594/Currency',
    projectTechStacks: ['Python', 'Flask', 'PostgreSQL'],
    featuredTechStacks: ['Flask'],
  },
  {
    projectTitle: 'Placing Ground',
    projectDescription: 'Test placing a product in 3D environment',
    projectImageLink:
      'https://github.com/Finns841594/intTest/raw/master/public/manual/Add_a_product.gif',
    projectUrl: 'threejs-ubi.vercel.app',
    projectGithubUrl: 'https://github.com/Finns841594/intTest',
    projectTechStacks: ['TypeScript', 'Three.js', 'React', 'React-three-fiber'],
    featuredTechStacks: ['Three.js', 'React-three-fiber'],
  },
]

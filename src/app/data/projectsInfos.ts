import { ProjectInfo } from '../types/types'

// should change gif to video for better performance.
// should try Cloudinary for CDN
export const projectsInfos: ProjectInfo[] = [
  {
    projectTitle: 'Why Midnight Sun',
    projectDescription:
      "I was fascinated by the evening sun when I first arrived in Stockholm. It took me a little bit of time to understand why. There are many articles explaining this, but I don't find them very intuitive.So, I built this interactive app to help people like me to understand this phenomenon in an easier and more intuitive way. ",
    projectImageLink:
      'https://github.com/Finns841594/why_midnight_sun/raw/main/public/whyMidnightSun.gif',
    projectUrl: 'https://why-midnight-sun-855h.vercel.app/',
    projectGithubUrl: 'https://github.com/Finns841594/why_midnight_sun',
    projectTechStacks: [
      'Three.js',
      'R3F',
      'Drei',
      'Next.js',
      'TypeScript',
      'React-Leaflet',
      'NextUI',
      'TailwindCSS',
    ],
    featuredTechStacks: ['Three.js', 'R3F', 'Drei', 'Next.js'],
  },
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
    featuredTechStacks: ['TypeScript', '.NET'],
  },
  {
    projectTitle: 'Multi-Currency Accounting',
    projectDescription:
      'This app can help you record your costs in different currencies(as many as you want!). And you can specify one main currency, so all the costs will be summed up into nominated currency by the exchange rates of that day.',
    projectImageLink:
      'https://github.com/Finns841594/Currency/raw/master/images/bookkeeping.png',
    projectUrl: 'https://currencyappf.azurewebsites.net',
    projectGithubUrl: 'https://github.com/Finns841594/Currency',
    projectTechStacks: ['Python', 'Flask', 'PostgreSQL'],
    featuredTechStacks: ['Flask'],
  },
  {
    projectTitle: 'Placing Ground',
    projectDescription: 'Test placing a product in 3D environment',
    projectImageLink:
      'https://github.com/Finns841594/intTest/raw/master/public/manual/Add_a_product.gif',
    projectUrl: 'https://threejs-ubi.vercel.app',
    projectGithubUrl: 'https://github.com/Finns841594/intTest',
    projectTechStacks: ['TypeScript', 'Three.js', 'React', 'React-three-fiber'],
    featuredTechStacks: ['Three.js', 'React-three-fiber'],
  },
  {
    projectTitle: 'Scorecard',
    projectDescription:
      'A card that helps employers meet perfect developer. Developed for internal use for instructors and sales to communicate on abilities and diversities a developer has. Woring in progress.',
    projectImageLink: '/scorecard.gif',
    projectUrl: 'scorecard-nine.vercel.app',
    projectGithubUrl: 'https://github.com/Finns841594/scorecard',
    projectTechStacks: ['TypeScript', 'React', 'Next.js', 'NextUI'],
    featuredTechStacks: ['Next.js', 'NextUI'],
  },
  // {
  //   projectTitle: 'Milk Shop',
  //   projectDescription:
  //     'A project to practice React skills. Implemented Redux for managing the states. Backend has full unit-test test set. One of the many practicing project in PGP',
  //   projectImageLink:
  //     'https://github.com/Finns841594/pgp-five-milk-app/blob/master/public/screenshot%20home.png?raw=true',
  //   projectUrl: '',
  //   projectGithubUrl: 'https://github.com/Finns841594/pgp-five-milk-app',
  //   projectTechStacks: [
  //     'TDD',
  //     'Redux',
  //     'TypeScript',
  //     'React',
  //     'Next.js',
  //     'NextUI',
  //     'Node.js',
  //   ],
  //   featuredTechStacks: ['TDD', 'Redux', 'Node.js'],
  // },
]

// type TechStack =
//   | 'JavaScript'
//   | 'TypeScript'
//   | 'C#'
//   | 'React.js'
//   | 'Express.js'
//   | 'GoJS'
//   | 'Python'
//   | 'Flask'
//   | 'PostgreSQL'
//   | 'Bootstrap'

export type ProjectInfo = {
  projectTitle: string
  projectDescription: string
  projectSubDescription?: string
  projectImageLink: string
  projectUrl?: string
  projectGithubUrl?: string
  projectTechStacks: string[]
  featuredTechStacks: string[]
}

export type TechStackObj = {
  stackName: string
  stackOfficalLink: string
}

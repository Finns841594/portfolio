type TechStack = 'JavaScript' | 'Typescript' | 'C#' | 'React.js' | 'Express.js' | 'GoJS'

export type ProjectInfo = {
  projectTitle: string,
  projectDescription: string,
  projectImageName: string,
  projectUrl?: string,
  projectGithubUrl?: string,
  projectTechStacks?: TechStack[],
  featuredTechStacks?: TechStack[],
}

export type TechStackObj = {
  stackName: TechStack,
  stackOfficalLink: string,
}
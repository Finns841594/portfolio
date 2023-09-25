type TechStack = 'JavaScript' | 'Typescript' | 'C#' | 'React.js' | 'Express.js' 

export type ProjectInfo = {
  projectTitle: string,
  projectDescription: string,
  projectImageName: string,
  projectUrl?: string,
  projectGithubUrl?: string,
  projectTechStacks?: TechStack[],
}
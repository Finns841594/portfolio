import { PortfolioCard } from './PortfolioCard'

import { projectsInfos } from '../data/projectsInfos-dev'
// import { projectsInfos } from '../data/projectsInfos'

export const Gallery = () => {
  return (
    <div className="flex flex-col px-8 items-center">
      <div className="h-28 flex flex-col items-center">
        <h1 className="text-3xl py-8">Gallery</h1>
      </div>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-3 justify-around">
        {projectsInfos.map((projectInfo, index) => (
          <PortfolioCard key={index} projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  )
}

import { PortfolioCard } from './PortfolioCard'
import { projectsInfos } from '../data/projectsInfos'
import { useDisclosure } from '@nextui-org/react'

export const Gallery = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="flex flex-col px-8 py-16 items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl py-4">Personal Projects</h1>
        <p className="text-md pb-8">Selected personal projects</p>
      </div>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-3 justify-around">
        {projectsInfos.map((projectInfo, index) => (
          <PortfolioCard key={index} projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  )
}

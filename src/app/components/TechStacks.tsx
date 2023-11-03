import React from 'react'
import { ProjectInfo } from '../types/types'
import { Chip, ScrollShadow } from '@nextui-org/react'

interface TechStacksProps {
  projectInfo: ProjectInfo
}

const TechStacks = ({ projectInfo }: TechStacksProps) => {
  return (
    <div>
      <ScrollShadow hideScrollBar className="max-w-[370px] flex gap-1">
        {projectInfo.projectTechStacks &&
          projectInfo.projectTechStacks.map((tech, index) => {
            if (!projectInfo.featuredTechStacks.includes(tech)) {
              return (
                <Chip size="sm" radius="full" key={index}>
                  {tech}
                </Chip>
              )
            } else {
              return (
                <Chip
                  size="sm"
                  radius="full"
                  key={index}
                  classNames={{
                    base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                    content: 'drop-shadow shadow-black text-white',
                  }}
                >
                  {tech}
                </Chip>
              )
            }
          })}
      </ScrollShadow>
    </div>
  )
}

export default TechStacks

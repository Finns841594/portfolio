import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Link,
  Chip,
  ScrollShadow,
} from '@nextui-org/react'

import GithubIcon from '../icons/GithubIcon'
import { ProjectInfo } from '../types/types'
import { techStacksObjs } from '../data/techStacksObj'

const techStacksObjsNameArray = techStacksObjs.map((item) => item.stackName)

interface PortfolioCardBigProp {
  projectInfo: ProjectInfo
}

const PortfolioCard = ({ projectInfo }: PortfolioCardBigProp) => {
  return (
    <Card isBlurred className="py-4 border-none max-w-[400px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-row justify-between align-bottom ">
        <h4 className="font-bold text-large">{projectInfo.projectTitle}</h4>
        {/* <small className="text-default-500">Project Subtitle</small> */}
        {projectInfo.projectUrl && (
          <Link isBlock href={projectInfo.projectUrl} isExternal showAnchorIcon>
            <small className="text-tiny">Visit App</small>
          </Link>
        )}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          isZoomed
          alt="Project preview gif"
          className="object-cover rounded-xl"
          src={`/${projectInfo.projectImageName}`}
          width={370}
        />
      </CardBody>
      <CardFooter className="flex flex-col justify-between">
        <div>
          {projectInfo.projectTechStacks &&
            projectInfo.projectTechStacks.map((tech, index) => {
              if (!techStacksObjsNameArray.includes(tech)) {
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
        </div>
        <div>
          <p className="text-tiny">
            <ScrollShadow hideScrollBar className="w-[300px] h-[100px]">
              {projectInfo.projectDescription}
            </ScrollShadow>
          </p>
        </div>
        <div>
          <Link href={projectInfo.projectGithubUrl} isExternal>
            <Button
              color="primary"
              startContent={<GithubIcon />}
              className="text-tiny"
              variant="bordered"
              radius="lg"
              size="sm"
            >
              Github Repo
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export { PortfolioCard }

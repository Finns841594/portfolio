import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Link,
  ScrollShadow,
  Button,
} from '@nextui-org/react'
import { ProjectInfo } from '../types/types'
import TechStacks from './TechStacks'

interface PortfolioCardBigProp {
  projectInfo: ProjectInfo
  onOpen: () => void
}

const PortfolioCard = ({ projectInfo, onOpen }: PortfolioCardBigProp) => {
  return (
    <Card isBlurred className="p-3 max-w-[400px]">
      <CardHeader className="pb-0 flex flex-row justify-between items-start">
        <div>
          <h2 className="font-bold text-large">{projectInfo.projectTitle}</h2>
          {projectInfo.projectSubDescription && (
            <small className="text-default-500">
              {projectInfo.projectSubDescription}
            </small>
          )}
        </div>
        <Button onPress={onOpen} variant="ghost" color="primary">
          More Info
        </Button>
      </CardHeader>
      <CardBody className="flex gap-2">
        <div className="w-full h-[180px] flex items-center overflow-hidden rounded-xl">
          <Image
            // isZoomed
            alt="Project preview gif"
            className="object-cover rounded-xl"
            src={`${projectInfo.projectImageLink}`}
            width={370}
          />
        </div>
        <TechStacks projectInfo={projectInfo} />
        <div className="text-tiny">
          <ScrollShadow hideScrollBar className="max-w-[300px] h-[100px]">
            {projectInfo.projectDescription}
          </ScrollShadow>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-between align-bottom">
          <Link
            isBlock
            href={projectInfo.projectGithubUrl}
            isExternal
            showAnchorIcon
          >
            <small className="text-tiny">Github Repo</small>
          </Link>
          {projectInfo.projectUrl && (
            <Link
              isBlock
              href={projectInfo.projectUrl}
              isExternal
              showAnchorIcon
            >
              <small className="text-tiny">Visit App</small>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

export { PortfolioCard }

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
  ModalFooter,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Divider,
} from '@nextui-org/react'
import { ProjectInfo } from '../types/types'
import TechStacks from './TechStacks'
import ProjectModal from './ProjectModal'

interface PortfolioCardBigProp {
  projectInfo: ProjectInfo
}

const PortfolioCard = ({ projectInfo }: PortfolioCardBigProp) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // Parse paragraph
  const paragraphs = projectInfo.projectDescription.split('\n').filter((p) => p)

  return (
    <div>
      <Card
        isBlurred
        className="p-3 max-w-[400px] dark:border-2 dark:border-primary "
      >
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
          <div className="max-w-[370px]">
            <TechStacks projectInfo={projectInfo} />
          </div>
          <div className="text-tiny">
            <ScrollShadow hideScrollBar className="max-w-[300px] h-[100px]">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ScrollShadow>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-between align-bottom">
            {projectInfo.projectGithubUrl && (
              <Link
                isBlock
                href={projectInfo.projectGithubUrl}
                isExternal
                showAnchorIcon
              >
                <small className="text-tiny">Github Repo</small>
              </Link>
            )}
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
            {projectInfo.clientUrl && (
              <Link
                isBlock
                href={projectInfo.clientUrl}
                isExternal
                showAnchorIcon
              >
                <small className="text-tiny">Client Website</small>
              </Link>
            )}
            {projectInfo.clientProjectInfoLink && (
              <Link
                isBlock
                href={projectInfo.clientProjectInfoLink}
                isExternal
                showAnchorIcon
              >
                <small className="text-tiny">Extra Info</small>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={'4xl'}
        placement="top"
      >
        <ModalContent>
          {(onClose) => (
            <ProjectModal projectInfo={projectInfo} onClose={onClose} />
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export { PortfolioCard }

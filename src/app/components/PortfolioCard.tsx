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
} from '@nextui-org/react'
import { ProjectInfo } from '../types/types'
import TechStacks from './TechStacks'

interface PortfolioCardBigProp {
  projectInfo: ProjectInfo
}

const PortfolioCard = ({ projectInfo }: PortfolioCardBigProp) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div>
      <Card
        isBlurred
        className="p-3 max-w-[400px] dark:border-2 dark:border-blue-700 "
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
              {projectInfo.projectDescription}
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
            {projectInfo.clientProjectInfo && (
              <Link
                isBlock
                href={projectInfo.clientProjectInfo}
                isExternal
                showAnchorIcon
              >
                <small className="text-tiny">Extra Info</small>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={'4xl'}>
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col gap-1">
                <p>{projectInfo.projectTitle}</p>
                <small className="text-default-500">
                  {projectInfo.projectSubDescription}
                </small>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-2">
                <p>{projectInfo.projectDescription}</p>
                <Image
                  alt="Project preview gif"
                  className="object-cover rounded-xl"
                  src={`${projectInfo.projectImageLink}`}
                />
                <div className="max-w-[900px]">
                  <TechStacks projectInfo={projectInfo} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link href={projectInfo.projectUrl} isExternal>
                  <Button color="primary" onPress={onClose}>
                    Visit App
                  </Button>
                </Link>
                <Link href={projectInfo.projectGithubUrl} isExternal>
                  <Button color="primary" onPress={onClose}>
                    Check Code
                  </Button>
                </Link>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export { PortfolioCard }

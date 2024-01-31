import {
  ModalHeader,
  Divider,
  ModalBody,
  ModalFooter,
  Button,
  Link,
  Image,
} from '@nextui-org/react'
import TechStacks from './TechStacks'
import { ProjectInfo } from '../types/types'

interface ProjectModalProps {
  projectInfo: ProjectInfo
  onClose: () => void
}

const ProjectModal = ({ projectInfo, onClose }: ProjectModalProps) => {
  return (
    <div>
      <ModalHeader className="flex flex-col gap-1">
        <p className="text-xl">{projectInfo.projectTitle}</p>
        <small className="text-default-500">
          {projectInfo.projectSubDescription}
        </small>
        <Divider />
      </ModalHeader>
      <ModalBody className="flex flex-col gap-6 px-8">
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
  )
}

export default ProjectModal

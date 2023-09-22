import { PortfolioCardBig } from "./PortfolioCardBig";
import { WorkCardInGallery } from "./WorkCardInGallery"
import { Card, CardBody } from '@nextui-org/react';

import { projectsInfos } from "../data/projectsInfos-dev";

export const Gallery = () => {
  return (
    <div className="flex flex-col w-screen px-8">  
      <div className='h-28 flex flex-col items-center'>
        <h1 className="text-3xl py-8">Gallery</h1>
      </div>
      <div className="gap-3 grid grid-cols-1 sm:grid-cols-3 justify-around" >
        {projectsInfos.map((projectInfo, index) => <PortfolioCardBig key={index} projectInfo={projectInfo}/>)}
      </div> 
    </div>
  )
}
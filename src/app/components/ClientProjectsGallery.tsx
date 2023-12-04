import React from 'react'
import { PortfolioCard } from './PortfolioCard'
import { clientProjectsInfos } from '../data/clientProjectsInfos'

const ClientProjectsGallery = () => {
  return (
    <div className="flex flex-col px-8 items-center">
      <div className="h-28 flex flex-col items-center">
        <h1 className="text-3xl py-8">Web App Projects</h1>
      </div>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-3 justify-around">
        {clientProjectsInfos.map((projectInfo, index) => (
          <PortfolioCard key={index} projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  )
}

export default ClientProjectsGallery

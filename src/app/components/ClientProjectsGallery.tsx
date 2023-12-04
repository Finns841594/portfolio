import React from 'react'
import { PortfolioCard } from './PortfolioCard'
import { clientProjectsInfos } from '../data/clientProjectsInfos'

const ClientProjectsGallery = () => {
  return (
    <div className="flex flex-col px-8 py-16 items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl py-4">Client Projects</h1>
        <p className="text-md pb-8">
          Selected consulting projects from my works in SALT. Some details are
          missing intentionally due to NDAs
        </p>
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

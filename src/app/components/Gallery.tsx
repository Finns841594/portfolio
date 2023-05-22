import { WorkCardInGallery } from "./WorkCardInGallery"

export const Gallery = () => {
  return (
    <div className="flex flex-col w-screen px-8">  
      <div className='h-28 flex flex-col items-center'>
        <h1 className="text-3xl py-8">Gallery</h1>
      </div>
      <div className='h-full w-full py-2 flex flex-row overflow-x-scroll'>
        <WorkCardInGallery />
        <WorkCardInGallery />
        <WorkCardInGallery />

      </div> 
    </div>
  )
}
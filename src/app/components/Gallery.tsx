import { ArtCardInGallery } from "./ArtCardInGallery"

export const Gallery = () => {
  return (
    <div className="flex flex-col w-screen px-28">  
      <div>
        <h2 className=''>Gallery</h2>
      </div>
      <div className='h-1/3 w-full px-4 py-2 bg-cyan-200 flex flex-row  '>
        <ArtCardInGallery />
        <ArtCardInGallery />
      </div> 
    </div>
  )
}
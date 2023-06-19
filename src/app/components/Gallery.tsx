import { WorkCardInGallery } from "./WorkCardInGallery"
import { Card } from '@nextui-org/react';

export const Gallery = () => {
  return (
    <div className="flex flex-col w-screen px-8">  
      <div className='h-28 flex flex-col items-center'>
        <h1 className="text-3xl py-8">Gallery</h1>
      </div>
      <div className='h-full w-full py-2 flex flex-row overflow-x-scroll'>
        <Card>
          <Card.Body>
            <Card.Image src="/map expand.gif" height={600} />
          </Card.Body>
        </Card>

      </div> 
    </div>
  )
}
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
            <Card.Image src="/images/1.jpg" width={300} height={300} />
          </Card.Body>
        </Card>

      </div> 
    </div>
  )
}
import { WorkCardInGallery } from "./WorkCardInGallery"
import { Card, CardBody } from '@nextui-org/react';

export const Gallery = () => {
  return (
    <div className="flex flex-col w-screen px-8">  
      <div className='h-28 flex flex-col items-center'>
        <h1 className="text-3xl py-8">Gallery</h1>
      </div>
      <div className='h-full w-full py-2 flex flex-row overflow-x-scroll'>
        <Card>
          {/* <Card.Body>
            <Card.Image src="/map expand.gif" height={600} />
          </Card.Body> */}
          <CardBody>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque qui repellendus, alias consequuntur illum sapiente ab deserunt error quis rerum dolore quia ipsum. Tempore libero labore minus atque accusamus nemo!</p>
          </CardBody>
        </Card>

      </div> 
    </div>
  )
}
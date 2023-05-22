import Image from "next/image"

const imageUrl = 'https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000&t=st=1684507735~exp=1684508335~hmac=c0871390d64ad976475ef3393e656920483968405f184c55c7e3c2ec51c0cd86'

export const WorkCardInGallery = () => {
  return (
    <div className='w-112 h-112 p-4 mx-4 border-2 border-serenity rounded-2xl flex-none flex flex-col'>

      <div className='rounded-lg w-full h-3/5 bg-cyan-300'>
        <Image src={imageUrl} alt='artwork-001' width={600} height={200} style={{objectFit: "contain"}} className="rounded-lg"/>
      </div>

      <div className='mt-4'>
        <h2 className="bg-rose-quartz text-white px-2 ">Mona Lisa</h2>
        <p className="bg-rose-quartz text-white px-2 ">Leonardo da Vinci</p>
      </div>
      
    </div> 
  )
}
import Image from "next/image"

const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'

export const ArtCardInGallery = () => {
  return (
    <div className='w-72 h-96 p-4 mx-4 border-2 border-violet-600 rounded-2xl '>

      <div className='rounded-lg'>
        <Image src={imageUrl} alt='artwork-001' width={300} height={500} />
      </div>

      <div className='mt-4'>
        <h2>Mona Lisa</h2>
        <p>Leonardoooooooooooooo da Vinci</p>
      </div>
      
    </div> 
  )
}
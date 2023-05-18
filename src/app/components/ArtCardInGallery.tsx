const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'

export const ArtCardInGallery = () => {
  return (
    <div className='w-80 h-100 p-4 mx-4 border-2 border-violet-600 rounded-2xl '>

      <div className='rounded-lg'>
        <img src={imageUrl} alt="Mona Lisa" className="rounded-lg" />
      </div>

      <div className='mt-4'>
        <h2>Mona Lisa</h2>
        <p>Leonardo da Vinci</p>
      </div>
      
    </div> 
  )
}
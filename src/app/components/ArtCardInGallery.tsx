const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'

export const ArtCardInGallery = () => {
  return (
    <div>

      <div>
        <img src={imageUrl} alt="Mona Lisa" />
      </div>

      <div>
        <h2>Mona Lisa</h2>
        <p>Leonardo da Vinci</p>
      </div>
      
    </div> 
  )
}
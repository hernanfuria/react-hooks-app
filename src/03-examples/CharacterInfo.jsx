export const CharacterInfo = ({name, image, gender, status}) => {
  return (
    <>
        <h1>{name}</h1>
        <img src={image} />
        <p>{gender} | {status}</p>
    </>
  )
}

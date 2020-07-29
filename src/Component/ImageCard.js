import React, {useState,useEffect} from 'react'

const ImageCard = ({ descripton, urls }) => {

const [span, setSpan] = useState(0)
    
  const imageRef = React.createRef()


useEffect(() => {
  imageRef.current.addEventListener('load', spanValue)
   
}, [])
   

const spanValue = () => {
    const height = imageRef.current.clientHeight;
   const span = Math.ceil(height/10)
   setSpan(span)
}
   
     
        return (
            <div style={{gridRowEnd:`span ${span}`}}>
                <img ref = {imageRef} alt={descripton} src={urls.regular}  />
            </div>
                
        )
    }

export default ImageCard

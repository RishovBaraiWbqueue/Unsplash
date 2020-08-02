import React, {useState,useEffect} from 'react'
import './ImageList.css'

const ImageCard = ({ descripton, urls }) => {

const [span, setSpan] = useState(0)
    
  const imageRef = React.createRef()


useEffect(() => {
  imageRef.current.addEventListener('load', spanValue)
   
}, [])
   

const spanValue = () => {
  if ( !imageRef.current === null) {

  
    const height = imageRef.current.clientHeight;
   const span = Math.ceil(height/10)
   setSpan(span)
  }
}
   
     
        return (
            <div className='column'>
                <img ref = {imageRef} alt={descripton} src={urls.regular}  />
            </div>
                
        )
    }

export default ImageCard

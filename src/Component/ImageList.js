import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = ({imageList}) => {

    const images =  imageList.map( list => <ImageCard key = {list.id} {...list}/>)
    
    return (
        <div className = 'image-list'>
           {images}
        </div>
    )
}

export default ImageList

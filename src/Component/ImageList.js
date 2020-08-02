import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'
import InfiniteScroll from "react-infinite-scroll-component";

const ImageList = ({ imageList, onSearchSubmit, hasMore, offset }) => {

    const images = imageList.map(list => <ImageCard key={list.id} {...list} />)

    return (
      
            <InfiniteScroll
                dataLength={imageList.length}
                next={onSearchSubmit}
                hasMore={hasMore}
                
            >   <div className='row'>
              {images}   
            </div>
               
                {console.log(imageList.length, hasMore)}
            </InfiniteScroll>
    

    )
}

export default ImageList

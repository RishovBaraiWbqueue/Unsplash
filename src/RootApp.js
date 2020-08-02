import React, {useState, useEffect} from 'react'
import SearchBar from './Component/SearchBar'
import unsplash from './Component/Api/Unsplash'
import ImageList from './Component/ImageList'


const RootApp = () => {

    const [images, setImages] = useState([])
    const [offset, setOffset] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [searchTerm,setSearchTerm] = useState('')


    const termSet = term => {
        setSearchTerm(term)
        setImages([])    
    }

    useEffect(()=> {
        onSearchSubmit()
    },[searchTerm])

    const onSearchSubmit = () => {
       
        unsplash.get('/search/photos', {
            params: {
                query: searchTerm,
                per_page:10,
                page: offset
            }
        }).then(response => {
            setImages( images.concat(response.data.results))
           
            setOffset(offset + 1)

            if(response.data.results.length < 10 )
        {
            setHasMore(false)
        }
        else if(response.data.results.length = 10){ setHasMore(true)}
        })

        
    }

    return (
        <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={searchTerm => termSet(searchTerm)} />       
                <ImageList 
                imageList={images}
                hasMore={hasMore}
                offset={offset}
                onSearchSubmit ={searchTerm => onSearchSubmit(searchTerm)}/>
                       
        </div>
    )
}

export default RootApp

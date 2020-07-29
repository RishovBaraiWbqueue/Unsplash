import React, {useState} from 'react'
import SearchBar from './Component/SearchBar'
import unsplash from './Component/Api/Unsplash'
import ImageList from './Component/ImageList'

const RootApp = () => {

    const [images, setImages] = useState([])

    const onSearchSubmit = searchTerm => {
        unsplash.get('/search/photos', {
            params: {
                query: searchTerm
            }
        }).then(response => {
            setImages(response.data.results)
        })
    }

    return (
        <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={searchTerm => onSearchSubmit(searchTerm)} />
            <ImageList imageList={images} />
        </div>
    )
}

export default RootApp

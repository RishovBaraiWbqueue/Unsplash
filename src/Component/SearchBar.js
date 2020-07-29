import React, {useState } from 'react'

const SearchBar = ({onSubmit}) => {

const [term, setTerm] = useState('')

  const inputChange = (e) => {
    setTerm(e.target.value)
        
    }

  const  onFormSubmit = (e) => {
        e.preventDefault()
      onSubmit(term)
    }
  
        return (
            <div className='ui segment'>
                <form onSubmit ={onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                        type='text'
                        value = {term} 
                        onChange={inputChange} />
                    </div>
                   
                </form>
            </div>

        )
    }

export default SearchBar

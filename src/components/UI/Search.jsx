import { getSuggestedQuery } from '@testing-library/react'
import React, {useState} from 'react'

const Search = ({onGetQuery}) => {
    const [text, setText] = useState('')

    const onChangeQuery = (q) => {
        setText(q)
        onGetQuery(q)
    }

    const submitSearch = (ev) => {
        ev.preventDefault()
    }

    return (
        <section className='search'>
            <form onSubmit={submitSearch}>
                <input 
                value={text} 
                onChange={(ev)=> onChangeQuery(ev.target.value)} 
                type="text" 
                className='form-control' 
                placeholder='Search Characters' 
                autoFocus
                />
            </form>
            
        </section>
    )
}

export default Search

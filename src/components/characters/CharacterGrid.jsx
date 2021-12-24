import React from 'react'
import Spinner from '../UI/Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = (props) => {
    const {items, isLoading} = props;

    return (
        
        <div>
            {isLoading && (
                <Spinner />
            )}
            {!isLoading && (
                <section className='cards'>
                {items.slice(0, 12).map(item => (
                    <CharacterItem item={item} key={item.char_id}/>
                ))}
                    </section>
            )}
        </div>
    )
}

export default CharacterGrid

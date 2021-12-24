import React from 'react'
import spinner from '../../img/spinner.gif'

const spinnerStyle = {
    margin: 'auto',
    display: 'block',
    width: '200px'
}

const Spinner = () => {
    return (
        <img src={spinner} alt='loading icon' style={spinnerStyle}/>
    )
}

export default Spinner

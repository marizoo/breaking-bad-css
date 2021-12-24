import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
       const result = await axios(
         `https://www.breakingbadapi.com/api/characters`
       )
       setItems(result.data)
       setIsLoading(false)
    }
    fetchItems()
  },[])

  return (
    <div className='container'>
      <Header />
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  )
}

export default App

import './App.css';

import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './Context/DataContext'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
      if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        console.log(resData)

        if(resData.results.length > 0) {
          setData(resData.results)
          setMessage(`Latest from ${search}`)
        } else {
          setMessage('Artist Not Found')
        }
      }
      fetchData()
      }
    }, [search])

    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
    }

    return (
        <div style={{'textAlign': 'center', 'marginTop': '15px'}}>
            <SearchBar handleSearch = {handleSearch}/* doesn't work :style={{'align-items': 'center'}} *//>
            {message}
            <DataContext.Provider value={data} >
              <Gallery/>
              </ DataContext.Provider >

        </div>
    )
}

export default App


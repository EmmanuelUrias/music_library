import './App.css';

import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './Context/DataContext'
import { SearchContext, searchContext } from './Context/SearchContext'
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import { Fragment } from 'react'
import { createResource as fetchData } from './helper'

function App(){
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)
   //let searchInput = useRef('')
   let [search, setSearch] = useState('')

   useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
   }, [searchTerm])


    const API_URL = 'https://itunes.apple.com/search?term='

    const handleSearch = (e, term) => {
      e.preventDefault()
      const fetchData = async () => {
        document.title = `${term} Music`
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        console.log(resData)

        if(resData.results.length > 0) {
          setData(resData.results)
          setMessage(`Latest from ${term}`)
        } else {
          setMessage('Artist Not Found')
        }
      }
      fetchData()
    }

    return (
<div>
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch = {handleSearch}/>
							<Gallery data={data} />
						</Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
		</div>
    )
}

export default App


import { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return(
     <div>
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type='text' placeholder='Enter a search term here' onChange={(e) => setSearchTerm(e.target.value)}></input>
            <input type='submit'></input>
        </form>
     </div>
    )
}

export default SearchBar
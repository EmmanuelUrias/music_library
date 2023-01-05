import { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return(
     <div>
        <form>
            <input type='text' placeholder='Enter a search term here'></input>
            <button type='submit'>Search</button>
        </form>
     </div>
    )
}

export default SearchBar
import { SearchContext } from '../Context/SearchContext'
import { useContext } from 'react'

function SearchBar() {
    const { term, handleSearch } = useContext(SearchContext)


    return(
     <div>
        <form>
            <input ref={term} type='text' placeholder='Enter a search term here'></input>
            <input type='submit' onClick={(e) => handleSearch(e, term.current.value)}></input>
        </form>
     </div>
    )
}

export default SearchBar
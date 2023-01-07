import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import GalleryItem from "./GalleryItem"

function Gallery() {
        const data = useContext(DataContext)

        const displaySongs = data.map((song, i) => {
            return(
                <GalleryItem item= {song} key={i}/>
            )
        })

    return(
        <div>
           {displaySongs}
        </div>
    )
}

export default Gallery
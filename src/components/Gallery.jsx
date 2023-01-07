import GalleryItem from "./GalleryItem"

function Gallery(props) {
        const displaySongs = props.data.map((song, i) => {
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
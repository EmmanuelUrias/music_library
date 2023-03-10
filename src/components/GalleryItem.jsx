import { useState } from "react";

function GalleryItem (props) {
    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
    

    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        <div style={detailStyle}>
            <h2>{props.item.trackName}</h2>
            <h3>{props.item.collectionName}</h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
        </div>
    }

    let viewItem = () => setView(!view)

    return(
        <div onClick={viewItem} style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}

        </div>
    )
}

export default GalleryItem
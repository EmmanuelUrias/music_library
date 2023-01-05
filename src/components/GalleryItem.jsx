import { useState } from "react";

function GalleryItem () {
    let [view, setView] = useState(false)

    let viewItem = () => setView(!view)

    return(
        <div onClick={viewItem} style={{'display': 'inline-block'}}>
            <h1>Gallery Item</h1>
        </div>
    )
}

export default GalleryItem
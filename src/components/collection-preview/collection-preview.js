import React from "react"
import CollectionItem from "../collection-item/collection-item"
import "./collection-preview.css"

const CollectionPreview = ({title, items}) => {
    return(
       <div>
           <h1 className="collection-preview-title">{title.toUpperCase()}</h1>
           <div className="collection-preview">
                {items.map(({id, ...otherItem}) => {
                    return (
                    <CollectionItem key={id} {...otherItem}/>
                    )
                })}
            </div>
       </div>
    )

}

export default CollectionPreview

import React from "react"
import "./collection-item.css"

const CollectionItem = ({id,title,price, calories, image, unit }) => {
    return(
        <div className="collection-item">
            <img className="collection-item-img" src={image} alt=""/>
            <h4 className="collection-item-title">{title}</h4>

            <div className="collection-item-footer">
                <p className="collection-item-price">${price}</p>
                <p className="collection-item-calorie">{calories} per {unit}</p>
            </div>
        </div>
    )
}

export default CollectionItem

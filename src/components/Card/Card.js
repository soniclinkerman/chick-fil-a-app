import React from "react"
import "../styles.css"
const Card = ({image,title,price,calories, unit, info, id}) => {
    return(
        <div className="card" onClick={()=> info(id)}>
            <div className="card-link">
                <img src={image} className="card-img" alt="menu-img"/>
                <p className="card-title">{title}</p>
                <div className="card-bottom">
                    <p className="card-price">${price}</p>
                    <p className="card-calories">{calories} Cal per {unit}</p>
                </div>
            </div>
        </div>
    )
}

export default Card

import React from "react"
import "./menu-item.css"
import { withRouter } from "react-router-dom"

const MenuItem = ({title, image, history, linkUrl, match}) => {
    return(
        <div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <img src={image} className="menu-item-img" alt="menu-item"/>
            <p className="menu-item-title">{title}</p> 
        </div>
    )
}

export default withRouter(MenuItem)

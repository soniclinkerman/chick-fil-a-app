import React from "react"
import "./scroll.css"
const Scroll = (props) => {
    return(
        <div className="scrolling">
            {props.children}
        </div>
    )
}

export default Scroll

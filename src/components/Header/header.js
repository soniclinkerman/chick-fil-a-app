import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

import {ReactComponent as Logo} from "../../assets/chick-fil-a-logo.svg"
const Header = () => {
    return(
    <div className="header">
        <Link className="link" to="/">
            <Logo className="logo"/>
        </Link>

        <div className="options">
        <Link className="option" to="/catering">
            MEALS
        </Link>

        </div>
    </div>
    )
}

export default Header

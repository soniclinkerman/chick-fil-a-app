import React, { Component } from "react";
import { sections } from "../../sections.data.js"
import MenuItem from "../menu-item/menu-item.js"
import "./directory.css"

class Directory extends Component {
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div className="directory">
                {sections.map(({id, imageURL, ...otherMenuItems}) => {
                    return(
                        <div key={id}>
                            <MenuItem image={imageURL} {...otherMenuItems} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Directory

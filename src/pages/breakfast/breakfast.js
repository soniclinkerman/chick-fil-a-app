import React, { Component } from "react"
import {menuItems} from "../../data.js"
import CollectionPreview from "../../components/collection-preview/collection-preview.js";
class Breakfast extends Component {
    constructor(props){
        super(props);
        this.state = {collections: menuItems}
    }

    render(){
        const {collections} = this.state;
    return(
        <div>
            {collections.map(({id, ...otherMenuItems}) => {
                return(
                    <CollectionPreview key={id} {...otherMenuItems}/> 
                    )
                    })}
        </div>
        )}
                }

export default Breakfast

import React, { useState } from "react"
import {menuItems} from "../../../data.js"
import Card from "../Card/Card.js"
import {Link} from "react-router-dom"

const CardList = ({sendInfo}) => {
    const [itemInfo, setItemInfo] = useState({
        image: "",
        title:"",
        price: 0,
        calories: 0,
        unit: ""
    })

    function getItemInfo(id){
        menuItems.breakfast.filter((x,i) => {
            const item = menuItems.breakfast[i];
            if(id === x.id){
                setItemInfo(prevValue => {
                    return{
                        ...prevValue,
                        ...item
                    }
                })
            }
        }) 
    }

    console.log(itemInfo)

    return(
        <div className="main-grid">
            {menuItems.breakfast.map((item) => {  
                return(
                    // to={ `/catering/${item.title}`}
                    <Link key={item.id}  >
                        <Card 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title} 
                        price={item.price}
                        calories={item.calories}
                        unit={item.unit}
                        info={getItemInfo}
                        />
                   </Link>
                    )
            })}
        </div>
    )
}

export default CardList

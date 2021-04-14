import React from "react"
import axios from "axios"


function StarWardsCard (props){
    const {name, model, manufacturer = props.data}
console.log(props)
return ( 
    <div>
        <h2> {props.data.name}</h2>
        <p> {model}</p>
        <p> {manufacturer}</p>
    </div>



}

export default StarWardsCard
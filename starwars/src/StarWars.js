import React from "react"
import StarWardsCard from "./StarWardsCard"

function StarWars(props) {
    const {star} = props;

    console.log(props, "hello")

    return (
        <div>

            {star.map(function(photo){
                return StarWardsCard photo={photo} />

            })}
        </div>
    )
}
export default StarWars
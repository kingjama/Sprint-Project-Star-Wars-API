import React from "react";
import StarWardsCard from "./StarWardsCard";

function StarWars(props) {
  const { star } = props;
  console.log(props);
  return (
    <div>
      <h1> List of Star Wars </h1>
     {star.map(function (photo) {
        return <StarWardsCard photo={photo} />;
      })}    </div>
  );
}
export default StarWars;

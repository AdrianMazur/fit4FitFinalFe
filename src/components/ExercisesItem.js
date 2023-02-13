import React from "react";

function ExercisesItem({ image, name, specs }) {
  return (
    <div className="exercisesItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {specs} </p>
    </div>
  );
}

export default ExercisesItem;
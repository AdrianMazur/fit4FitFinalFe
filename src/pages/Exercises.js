import React from "react";
import { ExercisesList } from "../helpers/ExercisesList";
import ExercisesItem from "../components/ExercisesItem";
import "../styles/Exercises.css";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

function Exercises() {
  return (
    <>
        <Navigationbar />
    <div className="exercises">
         <h1 className="exercisesTitle">Lista ćwiczeń</h1>
         <div className="exercisesList">
            {ExercisesList.map((exercisesItem, key) => {
                return (
            <ExercisesItem
              key={key}
              image={exercisesItem.image}
              name={exercisesItem.name}
              specs={exercisesItem.specs}
            />
          );
        })}
         </div>
      
    </div>
    <Footer />
      </>
  );
}

export default Exercises;

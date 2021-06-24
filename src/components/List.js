import React from "react";
import "./List.css";
//
function List({ people }) {
  return (
    <>
      {people.map(({ id, name, age, img }) => {
        // const { id, name, age } = person;
        return (
          <article key={id} className="person">
            <div className="items">
              <h3>{name} </h3>
              <hr />
              <h4>{age} years</h4>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;

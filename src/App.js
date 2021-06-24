import React, { useState } from "react";
import List from "./components/List";
import Data from "./components/Data";

function App() {
  const [people, setpeople] = useState(Data);

  return (
    <div className="App">
      <h2> {people.length} Birthdays to remind</h2>
      <List people={people} />
      <button className="btn" onClick={() => setpeople([])}>
        Clear all
      </button>
    </div>
  );
}

export default App;

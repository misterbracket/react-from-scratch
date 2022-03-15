import "./index.css";

import { React } from "./react";

function Counter() {
  const [state, setState] = React.useState(1);
  const [pokemon, setPokemon] = React.useState("");

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${state}`)
      .then((data) => data.json())
      .then((res) => setPokemon((_) => res.name));
  }, [state]);

  return (
    <div className={"wrapper"}>
      <h1>React,</h1>
      <h2>but implemented by me</h2>
      <h3>COUNT: {state}</h3>
      <div>
        <button onClick={() => setState((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setState((count) => count - 1)}>
          Decrement
        </button>
        <pre>{pokemon}</pre>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
React.render(<Counter />, container);

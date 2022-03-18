import "./index.css";

import { React } from "./react";

function Counter() {
  const [state, setState] = React.useState(1);
  const [pokemon, setPokemon] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${state}`)
      .then((data) => data.json())
      .then((res) => {
        setPokemon(() => res);
        setIsLoading(() => false);
      });
  }, [state, isLoading]);

  const handleIncrement = () => {
    setState((count) => count + 1);
    setIsLoading(() => true);
  };

  const handleDecrement = () => {
    setState((count) => count - 1);
    setIsLoading(() => true);
  };

  return (
    <div className="wrapper">
      <h1>React,</h1>
      <h2>but implemented by me</h2>
      <h3>COUNT: {state}</h3>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <p>
        <strong>Name:</strong> {pokemon.name}
      </p>
      <div className="loading">
        {isLoading ? (
          <span>Loading... </span>
        ) : (
          <img
            src={pokemon.sprites?.other.home.front_default || ""}
            alt="Pokemon"
          />
        )}
      </div>
    </div>
  );
}

const container = document.getElementById("root");
React.render(<Counter />, container);

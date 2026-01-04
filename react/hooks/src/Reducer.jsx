// Reducer
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// The useReducer Hook allows for custom state logic

// useReducer(reducer, initialState, init) -> [currentState, dispatch]

import { useReducer } from "react";

// ---------------------------------------------------------------------

// Complex State Logic
//
// May be useful when keeping track of multiple pieces of state that rely on complex logic

const playersInit = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];

const playersReducer = (players, action) => {
  switch (action.type) {
    case "INCREASE":
      return players.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return players;
  }
};

// ---------------------------------------------------------------------

function Score() {
  const [players, playersDispatch] = useReducer(playersReducer, playersInit);

  const handleClick = (player) => {
    playersDispatch({ type: "INCREASE", id: player.id });
  };

  const playerDivs = players.map((player) => (
    <div key={player.id}>
      <label>
        <input
          style={{ marginRight: "1em" }}
          type="button"
          onClick={() => handleClick(player)}
          value={player.name}
        />

        {player.score}
      </label>
    </div>
  ));

  return <>{playerDivs}</>;
}

// ---------------------------------------------------------------------

export default Score;

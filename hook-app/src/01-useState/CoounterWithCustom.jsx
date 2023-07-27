import { useCounter } from "../hooks/useCounter";

export const CoounterWithCustom = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Coounter With Hook:{counter}</h1>
      <hr />
      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
      <button onClick={() => decrement(1)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};

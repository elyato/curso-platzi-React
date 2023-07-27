import { useCounter } from "./hooks/useCounter";

export const CoounterWithCustom = () => {
  
const {counter} = useCounter()
    return (
    <>
      <h1>Coounter With Hook:{counter}</h1>
      <hr />
      <button className="btn btn-primary">+1</button>
      <button className="btn btn-primary">reset</button>
      <button className="btn btn-primary">-1</button>
    </>
  );
};

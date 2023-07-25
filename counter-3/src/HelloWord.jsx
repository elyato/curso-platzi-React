import { CounterApp } from "../CounterApp";
import { FristApp } from "./fristApp";
import "./estilos.css";
export const HelloWord = () => {
  return (
    <>
      {/* <h1>HelloWord</h1>
      <FristApp subtitle={"y este es mi primer componente en react"} /> */}
      <CounterApp value={12} />
    </>
  );
};

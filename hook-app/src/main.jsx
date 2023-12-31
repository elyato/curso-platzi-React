import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CoounterWithCustom } from "./01-useState/CoounterWithCustom";
// import { HooksApp } from "./HooksApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CoounterWithCustom /> */}
    {/* <SimpleForm /> */}
    <FormWithCustomHook />
  </React.StrictMode>
);

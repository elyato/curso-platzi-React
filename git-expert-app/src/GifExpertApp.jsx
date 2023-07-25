import { useState } from "react";
import "./estilos.css";
export const GifExpertApp = () => {
  const [categories, setcategories] = useState([
    "one piece",
    "kimetsu no yaiba",
  ]);
  const onAddCategory = () => {
    setcategories([...categories], "pornHub");
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category} </li>;
        })}
      </ol>
      <button onClick={onAddCategory}>nueva categoria</button>
    </>
  );
};

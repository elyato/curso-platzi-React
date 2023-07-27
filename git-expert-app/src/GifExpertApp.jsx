import { useState } from "react";
import "./estilos.css";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["kimetsu no yaiba"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // categories.push(newCategory);
    setCategories([newCategory, ...categories]);

    // de estas formas se puede agregar la arreglo sin mutarlo
    // setcategories((cat) => [...cat, "halo"]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

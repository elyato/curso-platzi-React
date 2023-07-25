import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, SetInputValue] = useState("");
  const onInputChange = ({ target }) => {
    SetInputValue(target.value);
  };
  const onSubmit = () => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((cate) => [inputValue, ...cate]);
    onNewCategory(inputValue.trim());
    SetInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

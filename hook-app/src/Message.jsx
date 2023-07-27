import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMauseMove = ({ x, y }) => {
      const coods = { x, y };
      console.log(coods);
    };
    window.addEventListener("mousemove", onMauseMove);

    return () => {
      window.removeEventListener("mousemove", onMauseMove);
    };
  }, []);

  return (
    <>
      <h3>El usuario ya existe</h3>
    </>
  );
};

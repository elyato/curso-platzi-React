import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
        
  const getImages = async () => {
    const newImages = await getGifs(category); // Pasar la categoría como argumento
    setImages(newImages); // Corregir el nombre de la función para establecer las imágenes en el estado
  };

  useEffect(() => {
    getImages();
  }, [category]); // Agregar la categoría como dependencia para que se vuelva a cargar cuando cambie

  return {
    images: images,
    isLoading: true,
  };
};

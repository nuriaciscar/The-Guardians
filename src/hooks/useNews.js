import NewsContext from "../store/contexts/NewsContext";
import { useContext } from "react";

const useNews = () => {
  const { kitten, dispatch } = useContext(NewsContext);

  const loadKitten = () => {
    const kitten = [
      // Aqui se pediria la informacion de la API
      {
        id: 1,
        name: "Lorenzo",
      },
    ];
    dispatch(loadKittenAction(kitten));
  };

  const createKitty = (kitty) => {
    dispatch(createKittyAction(kitty));
  };

  const deleteKitten = (id) => {
    dispatch(deleteKittyAction(id));
  };

  return {
    kitten,
    loadKitten,
    createKitty,
    deleteKitty,
  };
};

import NewsContext from "../store/contexts/NewsContext";
import { useContext, useCallback } from "react";
import {
  getLocalApiAction,
  postLocalApiAction,
  deleteLocalApiAction,
  putLocalApiAction,
} from "../store/actions/actionCreator";

const useLocalApi = () => {
  let { localApi, dispatchLocalApi } = useContext(NewsContext);

  const getLocalApi = useCallback(async () => {
    const response = await fetch("https://api-guardians.herokuapp.com/news");
    let localApi = await response.json();
    dispatchLocalApi(getLocalApiAction(localApi));
  }, [dispatchLocalApi]);

  const postLocalApi = useCallback(
    async (postData) => {
      const response = await fetch("https://api-guardians.herokuapp.com/news", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      postData = await response.json();
      dispatchLocalApi(postLocalApiAction(postData));
    },
    [dispatchLocalApi]
  );

  const deleteLocalApi = useCallback(
    async (id) => {
      await fetch(`https://api-guardians.herokuapp.com/news/${id}`,
        {
          method: "DELETE",
        },
      );
      dispatchLocalApi(deleteLocalApiAction(id));
    },
    [dispatchLocalApi]
  );

  const putLocalApi = useCallback(
    async (id, putData) => {
      const response = await fetch("https://api-guardians.herokuapp.com/news");

      let puttedData = await response.json();

      dispatchLocalApi(putLocalApiAction(puttedData));
    },
    [dispatchLocalApi]
  );

  return {
    localApi,
    getLocalApi,
    putLocalApi,
    postLocalApi,
    deleteLocalApi,
  };
};

export default useLocalApi;

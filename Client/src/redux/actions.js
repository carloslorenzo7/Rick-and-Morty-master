import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";

export const addFav = (personajes) => {
  return async (dispatch) => {
    try {
      const URL = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(URL, personajes);

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      // opcion 1:
      alert(error.message);

      // opcion 2: alert("error")
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};

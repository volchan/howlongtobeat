import createDataContext from "./createDataContext";
import api from "../config/api";

const searchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "update_searchTerm":
      return { ...state, term: payload };
    case "update_searching":
      return { ...state, searching: payload };
    case "populate_games":
      return { ...state, games: payload };
    default:
      return state;
  }
};

const search = async (term) => {
  const res = await api.get("/search", {
    params: { term },
  });

  return res.data;
};

const searchTerm = (dispatch) => async (term) => {
  dispatch({ type: "update_searchTerm", payload: term });
  dispatch({ type: "update_searching", payload: true });
  dispatch({ type: "populate_games", payload: await search(term) })
};

export const { Context, Provider } = createDataContext(
  searchReducer,
  { searchTerm },
  { searching: false, term: "", games: [] }
);

import createDataContext from "./createDataContext";

const searchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "update_searchTerm":
      return { ...state, searchTerm: payload };
    case "update_searching":
      return { ...state, searching: payload };
    default:
      return state;
  }
};

const searchTerm = (dispatch) => async ({ term }) => {
  dispatch({ type: "update_searchTerm", payload: term });
  dispatch({ type: "update_searching", payload: true });
};

export const { Context, Provider } = createDataContext(
  searchReducer,
  { searchTerm },
  { searching: false, searchTerm: "", results: [] }
);

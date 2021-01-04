const fetcher = () => {
  fetch("https://mongo-real-estate.herokuapp.com/api/v1/acamica/estate")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

const loadReducer = async (state, action) => {
  switch (action.type) {
    case "LOAD_ESTATES":
      state = fetcher();
      return state;
    default:
      return state;
  }
};

export default loadReducer;

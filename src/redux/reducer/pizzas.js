const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  if (action.tye === "SET_PIZZAS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default pizzas;

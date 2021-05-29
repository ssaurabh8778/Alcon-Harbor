export const initialState = {
  suggestedProducts: [],
  selectedProduct: {},
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      console.log("User has been set");
      return {
        ...state,
        user: action.user,
      };
    case "ADD_SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.item,
      };
    case "REMOVE_SELECTED_PRODUCTS":
      return {
        ...state,
        selectedProduct: {},
      };
    case "ADD_SUGGESTED_PRODUCTS":
      return {
        ...state,
        suggestedProducts: action.item,
      };
    case "REMOVE_SUGGESTED_PRODUCTS":
      return {
        ...state,
        suggestedProducts: [],
      };

    default:
      return state;
  }
}

export default reducer;

export const hostelDetailsState = {
  loading: false,
  menu: true,
};

export const hostelDetailsReducer = (state, action) => {
  switch (action.type) {
    case "menu":
      return {
        ...state,
        menu: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "cartState":
      return {
        ...state,
        cartState: action.payload,
      };
    default:
      return state;
  }
};

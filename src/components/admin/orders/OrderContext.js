export const orderState = {
  orders: [],
  addLocationModal: false,
  updateOrderModal: {
    modal: false,
    oId: null,
    status: "",
  },
  loading: false,
};

export const orderReducer = (state, action) => {
  switch (action.type) {
    /* Get all location */
    case "fetchOrderAndChangeState":
      return {
        ...state,
        orders: action.payload,
      };
    /* Create a location */
    case "addLocationModal":
      return {
        ...state,
        addLocationModal: action.payload,
      };
    /* Edit a location */
    case "updateOrderModalOpen":
      return {
        ...state,
        updateOrderModal: {
          modal: true,
          oId: action.oId,
          status: action.status,
        },
      };
    case "updateOrderModalClose":
      return {
        ...state,
        updateOrderModal: {
          modal: false,
          oId: null,
          status: "",
        },
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

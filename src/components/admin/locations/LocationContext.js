export const locationState = {
  locations: [],
  addLocationModal: false,
  editLocationModal: {
    modal: false,
    cId: null,
    des: "",
    status: "",
  },
  loading: false,
};

export const locationReducer = (state, action) => {
  switch (action.type) {
    /* Get all location */
    case "fetchLocationAndChangeState":
      return {
        ...state,
        locations: action.payload,
      };
    /* Create a location */
    case "addLocationModal":
      return {
        ...state,
        addLocationModal: action.payload,
      };
    /* Edit a location */
    case "editLocationModalOpen":
      return {
        ...state,
        editLocationModal: {
          modal: true,
          cId: action.cId,
          des: action.des,
          status: action.status,
        },
      };
    case "editLocationModalClose":
      return {
        ...state,
        editLocationModal: {
          modal: false,
          cId: null,
          des: "",
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

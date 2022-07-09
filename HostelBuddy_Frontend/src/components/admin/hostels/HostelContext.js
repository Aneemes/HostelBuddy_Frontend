export const hostelState = {
  hostels: null,
  addHostelModal: false,
  editHostelModal: {
    modal: false,
    pId: "",
    pName: "",
    pDescription: "",
    pImages: null,
    pStatus: "",
    pLocation: "",
    pQuantity: "",
    pPrice: "",
    pOffer: "",
  },
};

export const hostelReducer = (state, action) => {
  switch (action.type) {
    /* Get all hostel */
    case "fetchHostelsAndChangeState":
      return {
        ...state,
        hostels: action.payload,
      };
    /* Create a hostel */
    case "addHostelModal":
      return {
        ...state,
        addHostelModal: action.payload,
      };
    /* Edit a hostel */
    case "editHostelModalOpen":
      return {
        ...state,
        editHostelModal: {
          modal: true,
          pId: action.hostel.pId,
          pName: action.hostel.pName,
          pDescription: action.hostel.pDescription,
          pImages: action.hostel.pImages,
          pStatus: action.hostel.pStatus,
          pLocation: action.hostel.pLocation,
          pQuantity: action.hostel.pQuantity,
          pPrice: action.hostel.pPrice,
          pOffer: action.hostel.pOffer,
        },
      };
    case "editHostelModalClose":
      return {
        ...state,
        editHostelModal: {
          modal: false,
          pId: "",
          pName: "",
          pDescription: "",
          pImages: null,
          pStatus: "",
          pLocation: "",
          pQuantity: "",
          pPrice: "",
          pOffer: "",
        },
      };
    default:
      return state;
  }
};

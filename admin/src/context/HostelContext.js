export const hostelState = {
  hostels: null,
  addHostelModal: false,
  editHostelModal: {
    modal: false,
    _id: "",
    name: "",
    type: "",
    city: null,
    address: "",
    distance: "",
    photos: "",
    title: "",
    desc: "",
    rooms: "",
    cheapestPrice: "",
    featured: "",
  },
};

export const hostelReducer = (state, action) => {
  switch (action.type) {
    /* Get all Hostel */
    case "fetchHostelsAndChangeState":
      return {
        ...state,
        hostels: action.payload,
      };
    /* Create a Hostel */
    case "addHostelModal":
      return {
        ...state,
        addHostelModal: action.payload,
      };
    /* Edit a Hostel */
    
  }
};

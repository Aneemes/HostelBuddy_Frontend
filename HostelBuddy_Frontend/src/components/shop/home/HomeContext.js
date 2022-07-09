export const homeState = {
  locationListDropdown: false,
  filterListDropdown: false,
  searchDropdown: false,
  hostels: null,
  loading: false,
  sliderImages: [],
};

export const homeReducer = (state, action) => {
  switch (action.type) {
    case "locationListDropdown":
      return {
        ...state,
        locationListDropdown: action.payload,
        filterListDropdown: false,
        searchDropdown: false,
      };
    case "filterListDropdown":
      return {
        ...state,
        locationListDropdown: false,
        filterListDropdown: action.payload,
        searchDropdown: false,
      };
    case "searchDropdown":
      return {
        ...state,
        locationListDropdown: false,
        filterListDropdown: false,
        searchDropdown: action.payload,
      };
    case "setHostels":
      return {
        ...state,
        hostels: action.payload,
      };
    case "searchHandleInReducer":
      return {
        ...state,
        hostels:
          action.hostelArray &&
          action.hostelArray.filter((item) => {
            if (
              item.pName.toUpperCase().indexOf(action.payload.toUpperCase()) !==
              -1
            ) {
              return item;
            }
            return null;
          }),
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "sliderImages":
      return {
        ...state,
        sliderImages: action.payload,
      };
    default:
      return state;
  }
};

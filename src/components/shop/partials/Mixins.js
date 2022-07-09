export const subTotal = (id, price) => {
  let subTotalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.filter((item) => {
    if (item.id === id) {
      subTotalCost = item.quantitiy * price;
    }
  });
  return subTotalCost;
};

export const quantity = (id) => {
  let hostel = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.filter((item) => {
    if (item.id === id) {
      hostel = item.quantitiy;
    }
  });
  return hostel;
};

export const totalCost = () => {
  let totalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.map((item) => {
    totalCost += item.quantitiy * item.price;
  });
  return totalCost;
};

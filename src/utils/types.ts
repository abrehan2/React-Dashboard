// ORDER ITEM PROPS -
export type OrderItemProps = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
};

// ORDER TYPE PROPS -
export type OrderTypeProps = {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pinCode: number;
  status: "Processing" | "Shipped" | "Delivered";
  subTotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItemProps[];
  _id: string;
};

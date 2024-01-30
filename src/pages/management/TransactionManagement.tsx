// IMPORTS -
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { OrderItemProps, OrderTypeProps } from "../../utils/types";
import ProductCard from "../../components/ProductCard";

// STATIC IMAGE -
const image =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

// ORDER ITEMS -
const orderItems: OrderItemProps[] = [
  {
    name: "Nike Boom",
    photo: image,
    _id: String(Math.random() * 16 * 100),
    quantity: 5,
    price: 1500,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderTypeProps>({
    name: "Abdul Rehan",
    address: "F-6",
    city: "Islamabad",
    state: "Islamabad",
    country: "Pakistan",
    pinCode: 44000,
    status: "Processing",
    subTotal: 3500,
    discount: 500,
    shippingCharges: 0,
    tax: 340,
    total: 3500 + 340 + 0 - 500,
    orderItems,
    _id: String(Math.random() * 16 * 100),
  });

  const updateStatus = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Delivered" : "Shipped",
    }));
  };

  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="productManagement">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>

          {order.orderItems.map((o) => {
            return (
              <ProductCard
                name={o.name}
                quantity={o.quantity}
                _id={o._id}
                photo={o.photo}
                price={o.price}
              />
            );
          })}
        </section>

        <article className="shippingInfo">
          <h1>Order info</h1>
          <h5>User info</h5>
          <p>Name: {order.name}</p>
          <p>
            Address:{" "}
            {`${order.address}, ${order.city}, ${order.country}, ${order.pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {order.subTotal}</p>
          <p>Shipping charges: {order.shippingCharges}</p>
          <p>Tax: {order.tax}</p>
          <p>Discount: {order.discount}</p>
          <p>Total: {order.total}</p>

          <h5>Status info</h5>
          <p>
            Status:{" "}
            <span
              className={
                order.status === "Delivered"
                  ? "blue"
                  : order.status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {order.status}
            </span>
          </p>

          <button onClick={updateStatus}>Process order</button>
        </article>
      </main>
    </div>
  );
};

export default TransactionManagement;

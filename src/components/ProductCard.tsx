// IMPORTS -
import { Link } from "react-router-dom";
import { OrderItemProps } from "../utils/types";

// COMPONENT -
const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemProps) => (
  <div className="transactionProductCard">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>

    <span>
      ${price} x {quantity} = ${price * quantity}
    </span>
  </div>
);

export default ProductCard;

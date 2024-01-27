// IMPORTS -
import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

// INTERFACE -
interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

// COLUMNS -
const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },

  {
    Header: "Name",
    accessor: "name",
  },

  {
    Header: "Price",
    accessor: "price",
  },

  {
    Header: "Stock",
    accessor: "stock",
  },

  {
    Header: "Action",
    accessor: "action",
  },
];

// DATA -
const arr: DataType[] = [
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Nike",
    price: 1500,
    stock: 10,
    action: <Link to="/admin/product/shoes?id=nike">Manage</Link>,
  },

  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Nike",
    price: 1200,
    stock: 10,
    action: <Link to="/admin/product/shoes?id=nike">Manage</Link>,
  },

  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Nike",
    price: 1200,
    stock: 10,
    action: <Link to="/admin/product/shoes?id=nike">Manage</Link>,
  },

  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Nike",
    price: 1200,
    stock: 10,
    action: <Link to="/admin/product/shoes?id=nike">Manage</Link>,
  },

  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Nike",
    price: 1200,
    stock: 10,
    action: <Link to="/admin/product/shoes?id=nike">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  // TABLEHOC IS RETURNING A FUNCTION, SO WE USED USECALLBACK HOOK TAKAY BAAR BAAR CALL NA HO FUNCTION -
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "productBox", "Products", 2),
    []
  );

  return (
    <>
      <div className="adminContainer">
        {/* -sidebar and main will come here */}
        <Sidebar />
        <main>{Table()}</main>
        <Link to="/admin/product/new" className="createProductBtn">
          <FaPlus />
        </Link>
      </div>
    </>
  );
};

export default Products;

// IMPORTS -
import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

// INTERFACE -
interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

// COLUMNS -
const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },

  {
    Header: "Amount",
    accessor: "amount",
  },

  {
    Header: "Discount",
    accessor: "discount",
  },

  {
    Header: "Quantity",
    accessor: "quantity",
  },

  {
    Header: "Status",
    accessor: "status",
  },

  {
    Header: "Action",
    accessor: "action",
  },
];

// DATA -
const arr: DataType[] = [
  {
    user: "Rehan",
    amount: 5500,
    discount: 500,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/Rehan">Manage</Link>,
  },
  {
    user: "Tracey",
    amount: 20000,
    discount: 10000,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/Tracey">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  // TABLEHOC IS RETURNING A FUNCTION, SO WE USED USECALLBACK HOOK TAKAY BAAR BAAR CALL NA HO FUNCTION -
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "productBox", "Transactions", 3, true),
    []
  );

  return (
    <>
      <div className="adminContainer">
        {/* -sidebar and main will come here */}
        <Sidebar />
        <main>{Table()}</main>
      </div>
    </>
  );
};

export default Transaction;

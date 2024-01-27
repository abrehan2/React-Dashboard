// IMPORTS -
import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

// INTERFACE -
interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

// COLUMNS -
const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },

  {
    Header: "Name",
    accessor: "name",
  },

  {
    Header: "Email",
    accessor: "email",
  },

  {
    Header: "Gender",
    accessor: "gender",
  },

  {
    Header: "Role",
    accessor: "role",
  },

  {
    Header: "Action",
    accessor: "action",
  },
];

// DATA -
const img = "https://randomuser.me/api/portraits/women/54.jpg";

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Ash Stones",
    email: "ash@mail.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  // TABLEHOC IS RETURNING A FUNCTION, SO WE USED USECALLBACK HOOK TAKAY BAAR BAAR CALL NA HO FUNCTION -
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "productBox", "Customers", 3, true),
    []
  );

  return (
    <>
      <div className="adminContainer">
        <Sidebar />
        <main>{Table()}</main>
      </div>
    </>
  );
};

export default Customers;

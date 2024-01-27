// IMPORTS -
import { ReactElement } from "react";
import Sidebar from "../components/Sidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";

// INTERFACE -
interface DataType {
  photo: string;
  name: string;
  price: number;
  stock: number;
  action: ReactElement
}

// COLUMNS -
const columns: Column<DataType>[] = [
{
  Header: "Photo",
  accessor: "photo"
}



]

const Products = () => {

  const Table = TableHOC<DataType>()


 return (
   <>
     <div className="adminContainer">
       {/* -sidebar and main will come here */}
       <Sidebar />
       <main>Products</main>
     </div>
   </>
 );
}

export default Products;
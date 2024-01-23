// IMPORTS -
import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className="adminContainer">
        <Sidebar />
        <main className="dashboard">
          <div className="bar">
            <BsSearch />
            <input type="text" placeholder="Search" />
            <FaRegBell />
            <img src="https://iili.io/JaZsKOJ.png" alt="User" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;

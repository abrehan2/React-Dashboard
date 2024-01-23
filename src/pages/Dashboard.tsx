// IMPORTS -
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="adminContainer">
        {/* -sidebar and main will come here */}
        <Sidebar />
        <main>
            Dashboard
        </main>
      </div>
    </>
  );
};

export default Dashboard;

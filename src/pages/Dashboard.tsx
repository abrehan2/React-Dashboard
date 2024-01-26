// IMPORTS -
import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import WidgetItem from "../components/WidgetItem";
import CategoryItem from "../components/CategoryItem";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

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

          <section className="widgetContainer">
            <WidgetItem
              percent={55}
              amount={true}
              value={340000}
              heading="Revenue"
              color="rgb(0, 115, 255)"
            />

            <WidgetItem
              percent={75}
              value={50}
              heading="Users"
              color="rgb(0, 115, 255)"
            />

            <WidgetItem
              percent={7}
              value={10000}
              heading="Transactions"
              color="rgb(0, 115, 255)"
            />
            <WidgetItem
              percent={30}
              value={1000}
              heading="Products"
              color="rgb(0, 115, 255)"
            />
          </section>
          <section className="graphContainer">
            <div className="revenueChart">
              <h2>Revenue & Transaction</h2>
              <BarChart
                data_1={[10000, 20000, 30000, 40000, 50000, 60000, 70000]}
                data_2={[5000, 12000, 25000, 30000, 45000, 20000, 35000]}
                title_1="Revenue"
                title_2="Transaction"
                bgColor_1="#061826"
                bgColor_2="#f26419"
              />
            </div>

            <div className="dashboardCategories">
              <h2>Inventory</h2>
              <div>
                {data.categories.map((item) => {
                  return (
                    <CategoryItem
                      heading={item.heading}
                      value={item.value}
                      color="#f26419"
                      key={item.heading}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          <section className="transactionContainer">
            <div className="genderChart">
              <h2>Gender Ratio</h2>
              <DoughnutChart
                labels={["Male", "Female"]}
                data={[20, 45]}
                backgroundColor={["#f26419", "#3b71ca"]}
                cutout={90}
              />
              <p>
                <BiMaleFemale />
              </p>
            </div>
           <DashboardTable data={data.transaction}/>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;

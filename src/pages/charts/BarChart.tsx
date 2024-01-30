// IMPORTS -
import Sidebar from "../../components/Sidebar";
import { BarChart as Bar } from "../../components/Charts";

// CONSTANTS -
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarChart = () => {
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="chartContainer">
        <h1>Bar chart(s)</h1>
        <section>
          <Bar
            data_1={[200, 300, 400, 500, 600, 700, 800]}
            data_2={[300, 600, 900, 1200, 1500, 1800, 2100]}
            title_1="Products"
            title_2="Users"
            bgColor_1="#061826"
            bgColor_2="#f26419"
          />
          <h2>Top selling products and customers</h2>
        </section>

        <section>
          <Bar
            horizontal={true}
            data_1={[300, 600, 900, 1200, 1500, 1800, 2100]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1="#f26419"
            bgColor_2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarChart;

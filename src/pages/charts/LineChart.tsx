// IMPORTS -
import { LineChart as Line } from "../../components/Charts";
import Sidebar from "../../components/Sidebar";

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

const LineChart = () => {
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="chartContainer">
        <h1>Line chart(s)</h1>
        <section>
          <div>
            <Line
              label="Users"
              data={[100, 20, 500, 700, 99, 2, 7, 100, 900]}
              borderColor="#3b71ca"
              bgColor="#f26419"
              labels={months}
            />
          </div>
          <h2>Active users</h2>
        </section>

        <section>
          <div>
            <Line
              label="Revenue"
              data={[
                1000, 2000, 50000, 70000, 99000, 200, 700, 100000, 900000, 500,
                2, 0,
              ]}
              borderColor="#3b71ca"
              bgColor="#f26419"
              labels={months}
            />
          </div>
          <h2>Revenue</h2>
        </section>
      </main>
    </div>
  );
};

export default LineChart;

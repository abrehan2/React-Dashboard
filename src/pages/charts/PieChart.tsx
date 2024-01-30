// IMPORTS -
import Sidebar from "../../components/Sidebar";
import {DoughnutChart, PieChart as Pie} from "../../components/Charts";
import {categories} from "../../assets/data.json";



const PieChart = () => {
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="chartContainer">
        <h1>Pie chart(s)</h1>
        <section>
          <div>
            <Pie
              labels={["Processing", "Shipped", "Delivered"]}
              data={[10, 20, 30]}
              backgroundColor={["#061826", "#3b71ca", "#f26419"]}
              offset={[5, 5, 5]}
            />
          </div>

          <h2>Order ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={["#061826", "#3b71ca", "#f26419", "#78C091"]}
              offset={[5, 5, 5]}
            />
          </div>

          <h2>Product categories ratio</h2>
        </section>
      </main>
    </div>
  );
};

export default PieChart;

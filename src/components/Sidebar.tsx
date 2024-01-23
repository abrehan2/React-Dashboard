// IMPORTS -
import { Link } from "react-router-dom";
import {
  DashboardContents,
  ChartContents,
  AppContents,
} from "../utils/navContents";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Rehan's Panel.</h2>
      {/* DASHBOARD */}
      <div>
        <h5>Dashboard</h5>
        <ul>
          {DashboardContents.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  backgroundColor: location.pathname.includes(item.url)
                    ? "rgba(0, 115, 225, 0.1)"
                    : "white",
                }}
              >
                <Link
                  to={item.url}
                  style={{
                    color: location.pathname.includes(item.url)
                      ? "rgb(0, 115, 225)"
                      : "black",
                  }}
                >
                  {<item.Icon />}
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CHARTS */}
      <div>
        <h5>Charts</h5>
        <ul>
          {ChartContents.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  backgroundColor: location.pathname.includes(item.url)
                    ? "rgba(0, 115, 225, 0.1)"
                    : "white",
                }}
              >
                <Link
                  to={item.url}
                  style={{
                    color: location.pathname.includes(item.url)
                      ? "rgb(0, 115, 225)"
                      : "black",
                  }}
                >
                  {<item.Icon />}
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* APPS */}
      <div>
        <h5>Dashboard</h5>
        <ul>
          {AppContents.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  backgroundColor: location.pathname.includes(item.url)
                    ? "rgba(0, 115, 225, 0.1)"
                    : "white",
                }}
              >
                <Link
                  to={item.url}
                  style={{
                    color: location.pathname.includes(item.url)
                      ? "rgb(0, 115, 225)"
                      : "black",
                  }}
                >
                  {<item.Icon />}
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

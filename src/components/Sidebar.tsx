// IMPORTS -
import { Link } from "react-router-dom";
import { DashboardContents, ChartContents } from "../utils/navContents";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(window.innerWidth < 1100);

  const resizeWindow = () => {
    setActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <>
      {active && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <RxHamburgerMenu />
        </button>
      )}
      <aside
        style={
          active
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
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
                    backgroundColor:
                      location.pathname === item.url
                        ? "rgba(0, 115, 225, 0.1)"
                        : "white",
                  }}
                >
                  <Link
                    to={item.url}
                    style={{
                      color:
                        location.pathname === item.url
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
                    backgroundColor:
                      location.pathname === item.url
                        ? "rgba(0, 115, 225, 0.1)"
                        : "white",
                  }}
                >
                  <Link
                    to={item.url}
                    style={{
                      color:
                        location.pathname === item.url
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

        {active && (
          <button id="close" type="button" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

export default Sidebar;

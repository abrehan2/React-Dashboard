// IMPORTS -
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

// FORMAT TIME -
const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600));
  const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
  const seconds = String(timeInSeconds % 60);

  return `${hours.padStart(2, "0")}:${minutes.padStart(
    2,
    "0"
  )}:${seconds.padStart(2, "0")}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="appContainer">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button
              onClick={() => {
                setTime(0);
                setIsRunning(false);
              }}
            >
              Reset
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;

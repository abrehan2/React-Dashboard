import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

// WIDGET COMPONENT -
type WidgetItemProps = {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
};

const WidgetItem = ({
  heading,
  value,
  percent,
  amount = false,
  color,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>

    <div className="widgetCircle" style={{background: `conic-gradient(${color} ${Math.abs(percent)/100*360}deg, rgb(255, 255, 255) 0)`}}>
      <span style={{color}}>{percent}%</span>
    </div>
  </article>
);

export default WidgetItem;

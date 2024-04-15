// import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./graph.scss";

export const Graph = () => {
  return (
    <div className="graph">
      <div className="data">
        <span className="title">Total Employees</span>
        <span className="number">216</span>
        <div className="men">120 Men</div>
        <div className="women">96 Women</div>
      </div>
      <div className="diagram">
        <div>
        {/* <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer> */}
        </div>
        <span className="interest">+2% Past month</span>
      </div>
    </div>
  );
};

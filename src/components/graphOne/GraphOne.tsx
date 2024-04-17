// import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import "./graphOne.scss";
import { graphOne } from "../../data";


const data = [
  {
    name: 'Page A',
    uv: 2300,
    pv: 400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 2600,
    pv: 398,
    amt: 210,
  },
  {
    name: 'Page C',
    uv: 2750,
    pv: 800,
    amt: 290,
  },
  {
    name: 'Page D',
    uv: 2550,
    pv: 908,
    amt: 1000,
  },
  {
    name: 'Page E',
    uv: 2500,
    pv: 800,
    amt: 181,
  },
  {
    name: 'Page F',
    uv: 2790,
    pv: 800,
    amt: 500,
  },
  {
    name: 'Page G',
    uv: 3090,
    pv: 300,
    amt: 100,
  },
];


export const GraphOne = () => {
  return (
    <>
      {graphOne.map((graph) => (
        <div className="graphOne" key={graph.id}>
          <div className="data">
            <span className="title">{graph.title}</span>
            <span className="number">{graph.number}</span>
            <div className="men">{graph.men} Men</div>
            <div className="women">{graph.women} Women</div>
          </div>
          <div className="diagram">
            <div className="charts">
              <ResponsiveContainer width="99%" height="80%">
                <AreaChart
                  width={100}
                  height={30}
                  data={data}
                  margin={{
                    top: 3,
                    right: 0,
                    left: 0,
                    bottom: 2,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#FF5151"
                    fill="#ffefe7"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text">
              <span className="interest">{graph.interest} Past month</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

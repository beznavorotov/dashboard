// import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import "./graphTwo.scss";
import { graphTwo } from "../../data";


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


export const GraphTwo = () => {
  return (
    <>
      {graphTwo.map((graphs) => (
        <div className="graphTwo" key={graphs.id}>
          <div className="data">
            <span className="title">{graphs.title}</span>
            <span className="number">{graphs.number}</span>
            <div className="men">{graphs.men} Men</div>
            <div className="women">{graphs.women} Women</div>
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
              <span className="interest">{graphs.interest} Past month</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


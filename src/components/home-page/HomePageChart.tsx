import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Investment growth data
const investmentData = [
  { name: "2020", investment: 10000 },
  { name: "2021", investment: 15000 },
  { name: "2022", investment: 22000 },
  { name: "2023", investment: 32000 },
  { name: "2024", investment: 45000 },
];

const HomePageChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={investmentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#9333ea" />
          <YAxis stroke="#9333ea" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#9333ea",
              color: "white",
              borderRadius: "10px",
            }}
            itemStyle={{ color: "white" }}
          />
          <Line
            type="monotone"
            dataKey="investment"
            stroke="#9333ea"
            strokeWidth={3}
            dot={{ r: 6, fill: "#9333ea" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HomePageChart;

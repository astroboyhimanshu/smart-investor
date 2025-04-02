import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Investment growth data
const investmentData = [
  { year: "2025", investment: 100000 },
  { year: "2026", investment: 180000 },
  { year: "2027", investment: 270000 },
  { year: "2028", investment: 400000 },
  { year: "2029", investment: 580000 },
];

const HomePageChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={investmentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#9333ea",
              color: "white",
              borderRadius: "10px",
            }}
            itemStyle={{ color: "white" }}
          />
          <Bar
            dataKey="investment"
            fill="#9333ea"
            barSize={50}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HomePageChart;

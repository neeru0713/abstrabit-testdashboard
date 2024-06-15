import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { data: {name:  "Bajaj Finserv", label: '25000(25%)'}, value: 250 },
  { data: {name:  "Shriram Finance", label: '20000(20%)'}, value: 200 },
  { data: {name:  "Mahindra Finance", label: '15000(15%)'}, value: 200 },
  { data: {name:  "Utkarsh Small Bank Finance", label: '40000(40%)'}, value: 300 },
];

const COLORS = ["#6c63ff", "#58cbd3", "#b9c606",  "#fa9d16"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[9px] text-center"
    >
      {data[index].data.label}
    </text>
  );
};

const renderColorfulLegendText = (value, entry, index) => {
  return (
    <span style={{ color: "black", fontSize:'10px' }}>
      {data[index].data.name}
    </span>
  );
};

const PieChartComponent = () => {
  return (
    <>
    <header className="w-full flex gap-[120px] px-10 pt-4">
    <h1 className="font-medium">Your FD Portfolio</h1>
    <select className="border py-2 rounded-lg px-2 text-sm shadow shadow-lg">
      <option value="DA">Deposit Amount</option>
    </select>
    </header>
   
    <ResponsiveContainer width="100%" height={200} className="p-2 mt-5">
      
      <PieChart>
        <Pie
          data={data}
          cx="40%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          formatter={renderColorfulLegendText}
        />
      </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default PieChartComponent;

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Deshboard = () => {
  const assigementChart = [
    {
      id: 1,
      assigementNo: "A1",
      mark: 45,
    },
    {
      id: 2,
      assigementNo: "A2",
      mark: 58,
    },
    {
      id: 3,
      assigementNo: "A3",
      mark: 50,
    },
    {
      id: 4,
      assigementNo: "A4",
      mark: 60,
    },
    {
      id: 5,
      assigementNo: "A5",
      mark: 58,
    },
    {
      id: 6,
      assigementNo: "A6",
      mark: 60,
    },
    {
      id: 7,
      assigementNo: "A7",
      mark: 60,
    },
    {
      id: 8,
      assigementNo: "A8",
      mark: 60,
    },
  ];
  return (
    <div style={{width: "100%"}}>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart data={assigementChart}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey="assigementNo" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="mark"
            fill="#8884d8"
            stroke="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Deshboard;

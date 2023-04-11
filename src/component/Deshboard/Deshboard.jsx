import React from "react";
import {
  LineChart,
  Line,
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
    <div>
      <LineChart width={1000} height={300} data={assigementChart}>
        <Line stroke="#8884d8" dataKey="mark"></Line>
        <XAxis stroke="#8884d8" dataKey="assigementNo" />
        <YAxis stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Deshboard;

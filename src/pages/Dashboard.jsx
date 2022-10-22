import React from "react";
import Clock from "./Clock";
import Bar from "./Charts/Bar";
import Pie from "./Charts/Pie";
import Graph3D from "./Charts/Graph3D";

const Dashboard = () => {
  return (
    <div className="mt-24">
      <div className="w-full  flex flex-col justify-between flex-wrap h-full">
        <Clock />
        <Bar />
        <Pie />
        <Graph3D />
      </div>
    </div>
  );
};

export default Dashboard;

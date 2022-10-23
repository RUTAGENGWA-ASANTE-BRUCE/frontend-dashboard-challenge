import React from "react";
import {ChartsHeader,Graph3D} from "../../components";


const Graph3d = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="3D Graph" title="The 3D Graph using react three fiber" />

      <div className="w-full h-80">
      <Graph3D />
      </div>
    </div>
  );
};

export default Graph3d;

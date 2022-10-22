import React from "react";
import {AnalogClock,ChartsHeader} from "../components";


const Clock = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Clock" title="The Analog Clock" />

      <div className="w-full">
        <AnalogClock />
      </div>
    </div>
  );
};

export default Clock;

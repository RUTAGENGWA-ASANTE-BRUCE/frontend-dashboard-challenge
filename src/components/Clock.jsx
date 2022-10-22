// import AnalogClock from "analog-clock-react";
import React, { useState } from "react";
function Clock() {
  const [options, setOptions] = useState({
    useCustomTime: true, // set this to true
    width: "300px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff",
    },
    seconds: 1, // set your
    minutes: 10, // own
    hours: 22, // time here.
  });
  const updateClock = () => {
    let ausTime = new Date().toLocaleString("en-US", {
      timeZone: "Australia/Brisbane",
    });
    let date = new Date(ausTime);

    setOptions({
      ...options,
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: date.getHours(),
    });
  };

  setInterval(updateClock, 1000);
  // return <AnalogClock {...options} />;
  <div />
}

export default Clock;

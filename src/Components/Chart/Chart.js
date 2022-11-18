import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          value={dataPoint.value}
          maxValue={dataPoint.null}
          label={dataPoint.label}
        />;
      })}
      <ChartBar />
    </div>
  );
};

export default Chart;

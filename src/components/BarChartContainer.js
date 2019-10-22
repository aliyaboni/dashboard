import React from "react";
import { BarChart } from "react-d3-components";

class BarChartContainer extends React.Component{
constructor(props){
  super(props);
  this.state  = {
   data : {
      label: "somethingA",
      values: [
        { x: "SomethingA", y: 10 },
        { x: "SomethingB", y: 4 },
        { x: "SomethingC", y: 3 }
      ]},
};
}
render(){
  return (
<div>
<h2>Bar Chart</h2>
    <BarChart
      data={this.state.data}
      width={1000}
      height={400}
      margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
    />
</div>
  );
}
}
export default BarChartContainer;

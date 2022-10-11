import React from 'react';
import { useLoaderData} from 'react-router-dom';
import BarCharts from './BarCharts/BarCharts';
import LineCharts from './LineCharts/LineCharts';

const ReChart = () => {
  const topics = useLoaderData();

    return (
      <div className="pb-24">
        <div className="flex justify-center py-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wider mb-10 px-20 py-5 bg-yellow-400 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg ">
            ReChart
          </h1>
        </div>
        <div className="mx-10 flex lg:flex-row flex-col justify-evenly items-center">
          <div>
            <h2 className=" font-bold text-2xl mb-5">
              Quiz Question Chart
            </h2>
            <BarCharts key={"1"} topics={topics.data}></BarCharts>
          </div>
          <div>
            <h2 className="text-center font-bold text-2xl mb-5">
              Department Cost Chart
            </h2>
            <LineCharts></LineCharts>
          </div>
        </div>
      </div>
    );
};

export default ReChart;
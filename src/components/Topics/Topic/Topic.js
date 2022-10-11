import React from 'react';
import Card from './Card/Card';

const Topic = ({ topic }) => {
    // console.log(topic);
    const {id, logo, name, total} = topic;
    return (
      <div className="bg-yellow-400 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg">
        <div>
          <img className="border-b-2 border-b-black w-full" src={logo} alt="" />
        </div>
        <div className="flex justify-around items-center mt-3">
          <h3 className="font-bold text-xl">{name}</h3>
          <p>Total Qus: {total}</p>
        </div>
        <div className="flex justify-center">
          <button className="w-3/4 bg-[#e92b19] rounded-lg my-4 hover:bg-yellow-400 hover:border-x-4 hover:border-t-2 hover:border-[#e92b19] hover:shadow-lg">
            <p className=" py-2 font-bold">Start Quiz</p>
          </button>
        </div>
      </div>
    );
};

export default Topic;
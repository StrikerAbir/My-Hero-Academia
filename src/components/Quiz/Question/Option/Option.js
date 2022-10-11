import React from 'react';
import './Option.css'
const Option = ({ option, id, showToastMessage,correctAnswer}) => {
    // console.log(id);
    return (
      <div className=" shadow-lg rounded-xl border-x-4 border-black hover:border-[#e92b19] hover:border-t-2">
        <label
          for={option}
          className="flex p-5"
          onClick={() => showToastMessage(correctAnswer,option)}
        >
          <input type="radio" id={option} name={id} />
          <div className="w-full h-full">
            <p className="ml-4">{option}</p>
          </div>
        </label>
      </div>
    );
};

export default Option;
import React from 'react';
import './Option.css'
const Option = ({ option, id,showToastMessage }) => {
    console.log(id);
    return (
      <div className="p-5 shadow-lg rounded-xl border-x-4 border-black hover:border-[#e92b19] hover:border-t-2">
        <label
          for={option}
          className="flex"
          onClick={() => showToastMessage(id)}
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
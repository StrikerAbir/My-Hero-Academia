import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import './Option.css'
const Option = ({ option, id }) => {
    console.log(id);
    return (
      <div className="p-5 shadow-lg rounded-xl border-x-4 border-black hover:border-[#e92b19] hover:border-t-2">
        <label for={option} className="flex">
          <input type="radio" id={option} name={id} />
          <p className="ml-4">{option}</p>
        </label>
      </div>
    );
};

export default Option;
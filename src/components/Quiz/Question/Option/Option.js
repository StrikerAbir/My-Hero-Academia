import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import './Option.css'
const Option = ({ option, id }) => {
    console.log(id);
    return (
      <div>
            <label for={option } className="flex">
            <input type="radio" id={option} name={id}/>
            <p className="ml-4">{option}</p>
          </label>
      </div>
    );
};

export default Option;
import React, { useContext } from 'react';
import './Option.css'
import { ToastContainer, toast } from "react-toastify";
import { DashContext } from '../../Quiz';

const Option = ({ option, id, correctAnswer }) => {
    const [correct, setCorrect, wrong, setWrong] = useContext(DashContext);
    // console.log(id);
    const showToastMessage = (correctAnswer, option) => {
        if (correctAnswer === option) {
            setCorrect(correct + 1);
        return toast.success("Correct Answer!", {
          position: toast.POSITION.TOP_CENTER,
        });
        } else {
            setWrong(wrong + 1);
        return toast.error("Wrong Answer!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    };
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
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Quiz = () => {
  const questionData = useLoaderData();
  const { id, name, questions } = questionData.data;
  // console.log(questions);
  // tost message
  const showToastMessage = (id) => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wider mb-10 px-20 py-5 bg-yellow-400 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg ">
          {name} Quiz
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="lg:w-4/6 mx-5">
          {questions.map((question, index) => (
            <Question
              key={Math.random()}
              index={index}
                  singleQuestion={question}
                  showToastMessage={showToastMessage}
            ></Question>
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Quiz;
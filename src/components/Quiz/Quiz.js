import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';

const Quiz = () => {
    const questionData = useLoaderData();
    const { id,name,questions } = questionData.data;
    // console.log(questions);
    return (
      <div>
        <div className="flex justify-center py-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wider mb-10 px-20 py-5 bg-yellow-400 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg ">
                    { name} Quiz
          </h1>
            </div>
            <div className="flex justify-center">
                <div className="w-4/6">

                {
                    questions.map(question=><Question key={Math.random()} singleQuestion={question}></Question>)
                }
                </div>
            </div>
      </div>
    );
};

export default Quiz;
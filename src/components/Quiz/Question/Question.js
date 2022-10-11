import React from "react";

const Question = ({ singleQuestion }) => {
  const { options, id, question, correctAnswer } = singleQuestion;
  console.log(question);
//   const
  return (
    <div className="w-4/5 border ">
      <img
        src="https://media.giphy.com/headers/myheroacademia/KTZdxBWpG829.gif"
        alt=""
      />
      <img
        src="https://media.giphy.com/avatars/myheroacademia/KLsed562kWfD/200h.gif"
        alt=""
      />
    </div>
  );
};

export default Question;

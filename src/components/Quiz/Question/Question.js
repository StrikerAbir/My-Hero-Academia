import React from "react";
import Option from "./Option/Option";

const Question = ({ singleQuestion }) => {
  const { options, id, question, correctAnswer } = singleQuestion;
    console.log(id);
    let splits=question;
//   const splits = question.slice(3, (question.length - 4))
    for (let i = 0; i < 20; i++){
        if (splits.includes("<p>")) {
          splits = splits.replace("<p>", "");
        }
        if (splits.includes("</p>")) {
          splits = splits.replace("</p>", "");
        }
        if (splits.includes("</span>")) {
          splits = splits.replace("</span>", "");
        }
        if (splits.includes("<span>")) {
          splits = splits.replace("<span>", "");
        }
        if (
          splits.includes(
            `<span style="background-color: transparent; color: rgb(0, 0, 0);">`
          )
        ) {
          splits = splits.replace(
             `<span style="background-color: transparent; color: rgb(0, 0, 0);">`,
            ""
          );
        }
    }
    
  return (
    <div className="border ">
      <div className="font-semibold text-2xl">{`${splits}`}</div>
      <div className="grid grid-cols-2">
        {options.map((option) => (
          <Option key={Math.random()} id={id} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;

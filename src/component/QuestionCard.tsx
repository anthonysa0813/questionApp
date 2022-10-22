import React from "react";
import { QuestionResponse } from "../interfaces";
import { QuestionCardContainer } from "../styles/main";

interface Prop {
  questionObject: QuestionResponse;
}

const QuestionCard = ({ questionObject }: Prop) => {
  return (
    <QuestionCardContainer>
      {Object.keys(questionObject).length > 0 && (
        <>
          <h4>{questionObject.question}</h4>
          <ul>
            <li>{questionObject.options[0]}</li>
            <li>{questionObject.options[1]}</li>
            <li>{questionObject.options[2]}</li>
          </ul>
          <div className="actions">
            <button>responder</button>
            <button>ir a la siguiente</button>
          </div>
        </>
      )}
    </QuestionCardContainer>
  );
};

export default QuestionCard;

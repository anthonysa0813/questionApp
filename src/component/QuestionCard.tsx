import React, { useState } from "react";
import { QuestionResponse } from "../interfaces";
import { QuestionCardContainer } from "../styles/main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Prop {
  questionObject: QuestionResponse;
  onClick?: () => void;
  setTotalScore: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionCard = ({ questionObject, onClick, setTotalScore }: Prop) => {
  const [currentResponse, setCurrentResponse] = useState("second");
  let score = JSON.stringify(localStorage.getItem("score"));
  const [error, setError] = useState(false);
  const notify = () => toast("Wow respondiste mal! 🤔");
  const notifySuccess = () => toast.success("WIII respondiste bien 😍");
  const [isDeseabled, setIsDeseabled] = useState(false);
  const isCorrect = () => {
    if (currentResponse === questionObject.answer) {
      setTotalScore((state) => state + 10);
      notifySuccess();
    } else {
      notify();
      setIsDeseabled(true);
    }
  };
  return (
    <QuestionCardContainer>
      {Object.keys(questionObject).length > 0 && (
        <>
          <h4>{questionObject.question}</h4>
          <ToastContainer />
          <ul>
            <li>
              <input
                type="radio"
                name="response"
                id="response"
                onClick={() => {
                  setCurrentResponse(questionObject.options[0]);
                }}
              />
              {questionObject.options[0]}
            </li>
            <li>
              <input
                type="radio"
                name="response"
                id="response"
                onClick={() => {
                  setCurrentResponse(questionObject.options[1]);
                }}
              />
              {questionObject.options[1]}
            </li>
            <li>
              <input
                type="radio"
                name="response"
                id="response"
                onClick={() => {
                  setCurrentResponse(questionObject.options[2]);
                }}
              />
              {questionObject.options[2]}
            </li>
          </ul>
          <div className="actions">
            <button onClick={isCorrect} disabled={isDeseabled}>
              responder
            </button>
          </div>
        </>
      )}
    </QuestionCardContainer>
  );
};

export default QuestionCard;

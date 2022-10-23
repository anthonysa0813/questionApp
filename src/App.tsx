import { useEffect, useState } from "react";
import { QuestionGrid } from "./styles/main";
import { CiWarning } from "react-icons/ci";
import { db } from "./firebase/config";
import { QuestionResponse } from "./interfaces";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import QuestionCard from "./component/QuestionCard";
import Modal from "./component/ModalComponet";
import ShowInfo from "./component/ShowInfo";

function App() {
  const [questionList, setQuestionList] = useState<
    QuestionResponse[] | DocumentData
  >([]);
  const [counter, setCounter] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [showModalLinks, setShowModalLinks] = useState(false);

  // va a controlar si se muestra la pregunta
  const [qa1, setQa1] = useState(1);
  const [qa2, setQa2] = useState(0);
  const [qa3, setQa3] = useState(0);
  const [qa4, setQa4] = useState(0);
  const [qa5, setQa5] = useState(0);
  const [qa6, setQa6] = useState(0);
  const [qa7, setQa7] = useState(0);
  // va a guardar la pregunta {options, question, answer}
  const [question1, setQuestion1] = useState<QuestionResponse>(
    {} as QuestionResponse
  );
  const [question2, setQuestion2] = useState<QuestionResponse>(
    {} as QuestionResponse
  );
  const [question3, setQuestion3] = useState<QuestionResponse>(
    {} as QuestionResponse
  );
  const [question4, setQuestion4] = useState<QuestionResponse>(
    {} as QuestionResponse
  );
  const [question5, setQuestion5] = useState<QuestionResponse>(
    {} as QuestionResponse
  );
  const [question6, setQuestion6] = useState<QuestionResponse>(
    {} as QuestionResponse
  );
  const [question7, setQuestion7] = useState<QuestionResponse>(
    {} as QuestionResponse
  );

  useEffect(() => {
    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, "preguntas"));
      let questionData: QuestionResponse[] | [] | DocumentData = [];
      querySnapshot.forEach((doc) => {
        questionData.push(doc.data());
      });
      console.log("questionData: ", questionData);
      setQuestionList(questionData);
    };
    obtenerDatos();
  }, []);

  useEffect(() => {
    if (questionList.length > 0) {
      setQuestion1(questionList.at(0));
      setQuestion2(questionList.at(1));
      setQuestion3(questionList.at(2));
      setQuestion4(questionList.at(3));
      setQuestion5(questionList.at(4));
      setQuestion6(questionList.at(5));
      setQuestion7(questionList.at(6));
    }
  }, [questionList]);

  const showNextQa = () => {
    setCounter((state) => state + 1);
  };

  return (
    <QuestionGrid className="">
      <h1>
        ¡Bienvenido a nuestro cuestionario sobre...
        <span>La inclusión de las mujeres en el mundo TECH</span>!
      </h1>
      {showModalLinks && (
        <Modal>
          <ShowInfo setShowModalLinks={setShowModalLinks} />
        </Modal>
      )}
      <div className="alert">
        <CiWarning />
        Te recomendamos antes de desarrollar el cuestionario, leer los
        siguientes blogs{" "}
        <span className="readBlog" onClick={() => setShowModalLinks(true)}>
          {" "}
          click para ver los blogs
        </span>
      </div>

      <h1>Score: {totalScore}</h1>
      <div className="questionListByOne">
        {questionList.map((question: QuestionResponse) => {
          return (
            <QuestionCard
              questionObject={question}
              setTotalScore={setTotalScore}
            />
          );
        })}
      </div>
    </QuestionGrid>
  );
}

export default App;

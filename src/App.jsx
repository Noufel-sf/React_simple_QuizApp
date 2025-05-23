import { useState } from "react";
import "./App.css";


// the game qustions and options

const Questions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the capital of England?",
    options: [
      { text: "London", correct: true },
      { text: "Liverpool", correct: false },
      { text: "Manchester", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the capital of Spain?",
    options: [
      { text: "Sevilla", correct: false },
      { text: "Madrid", correct: true },
      { text: "Barcelona", correct: false },
      { text: "Valencia", correct: false },
    ],
  },
  {
    question: "What is the capital of the United States?",
    options: [
      { text: "Washington, D.C.", correct: true },
      { text: "New York", correct: false },
      { text: "California", correct: false },
      { text: "Texas", correct: false },
    ],
  },
];

function App() {
  const [Result, setshowResult] = useState(false);
  const [Score, setScore] = useState(0);
  const [CurrentQuestion, setCurrentQuestion] = useState(0);


// funcition to handle the game 

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(Score + 1);
    }

    const nextQuestion = CurrentQuestion + 1;

    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setshowResult(true);
    }
  };

  // Restart the game
  const Restart_game = () => {
     setshowResult(false);
     setCurrentQuestion(0);
     setScore(0);
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white border-2 border-none rounded-lg shadow-lg flex flex-col items-center justify-center p-8 px-12 gap-12">
        <h1 className="text-4xl capitalize font-bold">Simple Quiz app</h1>

        {
        
        Result ? (
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl capitalize font-bold">
              Your Score is {Score} out of {Questions.length}
            </h1>
            <button
              onClick={() => {
                Restart_game();
              }}
              className="bg-blue-500 font-bold text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
            >
              Restart
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-2xl font-bold capitalize">
              {Questions[CurrentQuestion].question}
            </h2>

            <div className="flex flex-col gap-6 items-center w-full">
              {Questions[CurrentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 min-w-full font-bold cursor-pointer text-white rounded-lg px-4 py-2 text-left hover:bg-blue-600"
                  onClick={() => handleOptionClick(option.correct)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

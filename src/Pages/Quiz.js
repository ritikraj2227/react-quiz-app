import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
	const navigate = useNavigate();
	const data = useSelector((state) => state.quiz.quiz);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const handleHomeClick = () => {
		navigate("/");
	};

	const hangleRestartClick = () =>{
		setCurrentQuestion(0)
		setScore(0)
		setShowScore(false)
	}
	return (
		<div className="quiz-container">
			{showScore ? (
				<div className="score-section">
					<h2>
						You scored {score} out of {data.length}
					</h2>
					<div>
						<button onClick={handleHomeClick}>Home</button> <button onClick={hangleRestartClick}>Restart Quiz</button>
					</div>
				</div>
			) : (
				<div className="quiz">
					<div className="question-section">
						<div className="question-count">
							<span>Question {currentQuestion + 1}</span>/{data.length}
						</div>
						<div className="question-text">{data[currentQuestion].questionText}</div>
					</div>
					<div className="answer-section">
						{data[currentQuestion].answerOptions.map((answerOption, index) => (
							<button
								key={index}
								onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
								{answerOption.answerText}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;

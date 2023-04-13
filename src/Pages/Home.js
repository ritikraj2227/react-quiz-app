import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleButtonClick = (option) => {
		dispatch(fetchData(option));

		setTimeout(() => {
			navigate("/quiz");
		}, "100");
	};

	return (
		<>
			<div className="quiz-body">
				<div
					className="card"
					onClick={() => handleButtonClick("html")}>
					Html
				</div>
				<div
					className="card"
					onClick={() => handleButtonClick("css")}>
					Css
				</div>

				<div
					className="card"
					onClick={() => handleButtonClick("javascript")}>
					Javascript
				</div>
				<div
					className="card"
					onClick={() => handleButtonClick("react")}>
					React.js
				</div>
			</div>
		</>
	);
};

export default Home;

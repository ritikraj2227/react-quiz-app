import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "../redux/slice/quizSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchTitle } from "../redux/slice/titleSlice";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTitle());
	}, [dispatch]);

	const title = useSelector((state) => state.title.title);


	const navigate = useNavigate();

	const handleButtonClick = (option) => {
		dispatch(fetchQuiz(option));

		setTimeout(() => {
			navigate("/quiz");
		}, "100");
	};

	return (
		<>
			<div className="quiz-body">
				{title.map((title, index) => (
					<div
						key={index}
						className="card"
						onClick={() => handleButtonClick(title)}>
						{title}
					</div>
				))}
			</div>
		</>
	);
};

export default Home;

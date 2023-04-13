import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";

// Create the Redux store
const store = configureStore({
	reducer: {
		quiz: quizReducer,
	},
});

export default store;

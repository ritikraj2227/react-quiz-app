import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slice/quizSlice";
import titleReducer from "./slice/titleSlice";


const rootReducer = combineReducers({
	title: titleReducer,
	quiz: quizReducer,
});

const store = configureStore({
	reducer: rootReducer
	
});

export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slice/quizSlice";
import titleReducer from "./slice/titleSlice";


const rootReducer = combineReducers({
	title: titleReducer,
	quiz: quizReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
	quiz: [],
	error: null,
	isLoading: false,
	title: null,
};

export const fetchQuiz = createAsyncThunk("data/fetchQuiz", async (option, { rejectWithValue }) => {
	try {
		const response = await axios.get(`http://localhost:5000/${option}`);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchQuiz.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
				state.title = action.meta.arg;
				console.log(state.title);
			})
			.addCase(fetchQuiz.fulfilled, (state, action) => {
				state.isLoading = false;
				state.quiz = action.payload;
			})
			.addCase(fetchQuiz.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});



export default quizSlice.reducer;


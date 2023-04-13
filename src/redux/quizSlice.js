import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
	quiz: [],
	error: null,
	isLoading: false,
};

export const fetchData = createAsyncThunk("data/fetchData", async (option, { rejectWithValue }) => {
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
			.addCase(fetchData.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.quiz = action.payload;
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});



export default quizSlice.reducer;


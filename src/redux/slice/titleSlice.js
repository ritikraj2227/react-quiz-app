import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	title: [],
	error: null,
	isLoading: false,
};

export const fetchTitle = createAsyncThunk("data/fetchTitle", async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get("http://localhost:5000/quizTitle");
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

const titleSlice = createSlice({
	name: "title",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTitle.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchTitle.fulfilled, (state, action) => {
				state.isLoading = false;
				state.title = action.payload;
			})
			.addCase(fetchTitle.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
                console.log(state.error.message)
			});
	},
});

export default titleSlice.reducer;

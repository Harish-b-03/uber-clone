import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	startLocation: null,
	destination: null,
	travelTime: null,
};

export const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setStartLocation: (state, action) => {
			state.startLocation = action.payload;
		},
		setDestination: (state, action) => {
			state.destination = action.payload;
		},
		setTravelTime: (state, action) => {
			state.travelTime = action.payload;
		},
	},
});

export const { setStartLocation, setDestination, setTravelTime } =
	navSlice.actions;

export const getStartLocation = (state) => state.nav.startLocation;
export const getDestination = (state) => state.nav.destination;
export const getTravelTime = (state) => state.nav.travelTime;

export default navSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",

    initialState: {
        nowplaying: null,
        trailorvideo: null
    },

    reducers: {
        addNowPlaying: (state, action) => {
            state.nowplaying = action.payload;
        },

        addTrailer: (state, action) => {
            state.trailorvideo = action.payload;
        }
    }
});

export const { addNowPlaying, addTrailer } = movieSlice.actions;

export default movieSlice.reducer;

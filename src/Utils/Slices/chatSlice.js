import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messsages: [],
    },
    reducers: {
        addMessages: (state,action) => {
            state.messsages.splice( LIVE_CHAT_COUNT, 1);
            state.messsages.push(action.payload);
        }
    }
})

export const { addMessages } = chatSlice.actions;

export default chatSlice.reducer;
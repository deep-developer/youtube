import { configureStore } from "@reduxjs/toolkit";
import MenuDrawerSlice from "./Slices/MenuDrawerSlice";
import chatSlice from "./Slices/chatSlice";

const store = configureStore({
    reducer: {
        menuDrawer: MenuDrawerSlice,
        chat: chatSlice
    }
})

export default store; 
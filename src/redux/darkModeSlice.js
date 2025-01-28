import { toggle } from '@nextui-org/react';
import { createSlice } from '@reduxjs/toolkit';

const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

const darkModeSlice =  createSlice({
    name: 'darkMode',
    initialState:false,
    reducers: {
        toggleDarkMode: (state) => !state, 
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
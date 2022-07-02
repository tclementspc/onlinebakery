import { createSlice } from '@reduxjs/toolkit';
import { ROLLS } from '../../app/shared/ROLLS';

const initialState = {
    rollsArray: ROLLS
};

const rollsSlice = createSlice({
    name: 'rolls',
    initialState
});

export const rollsReducer = rollsSlice.reducer;

export const selectAllRolls = (state) => {
    return state.rolls.rollsArray;
};

export const selectRollById = (id) => (state) => {
    return state.rolls.rollsArray.find(
        (roll) => roll.id === parseInt(id)
    );
};

import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    temp: '30',
    soilHumidity: '60',
    airHumidity: '50',
}

const AppSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers: {
        setTemp: (state, action) => {
            state.temp = action.payload;
        }
    }
})

export default AppSlice.reducer;
export const { setTemp } = AppSlice.actions;
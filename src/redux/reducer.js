import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    temp: 30,
    soilHumidity: 0,
    airHumidity: 50,
    waterLevel: 0,
    fan: false,
    water: false,
    ip: '192.168.20.185',
}

const AppSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers: {
        setTemp: (state, action) => {
            state.temp = action.payload;
        },
        setSoilHumidity: (state, action) => {
            state.soilHumidity = action.payload;
        },
        setAirHumidity: (state, action) => {
            state.airHumidity = action.payload;
        },
        setWaterLevel: (state, action) => {
            state.waterLevel = action.payload;
        },
        setFan: (state, action) => {
            state.fan = action.payload;
            console.log("Fan:::", state.fan);
        },
        setWater: (state, action) => {
            state.water = action.payload;
            console.log(state.water);
        },
        setPump: (state, action) => {
            state.water = action.payload;
            console.log("Pump:::", state.water);
        },
        setIp: (state, action) => {
            state.ip = action.payload;
            console.log(`ip: ${state.ip}`);
        }
        
    }
})

export default AppSlice.reducer;
export const { setTemp, setAirHumidity, setFan, setSoilHumidity, setWater, setPump, setIp, setWaterLevel } = AppSlice.actions;
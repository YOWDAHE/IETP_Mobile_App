import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setFan } from "../redux/reducer";


export const turnFanOn = (ip) => {

    try {
        axios.get(`http://${ip}/turnFanOnServe`).
            then(res => tempStats = res.data).catch((error) => console.log("The error: ", error.code))
        return true;
    } catch (err) {
        console.error(`Error: ${err.responce}`);
    }
}

export const turnFanOff = (ip) => {

    try {
        axios.get(`http://${ip}/turnFanOffServe`).
            then(res => tempStats = res.data).catch((error) => console.log("The error: ", error.code))
        return false;
    } catch (err) {
        console.error(`Error: ${err.responce}`);
    }
}

export const turnPumpOn = (ip) => {

    try {
        axios.get(`http://${ip}/turnPumpOnServe`).
            then(res => tempStats = res.data).catch((error) => console.log("The error: ", error.code))
        return true;
    } catch (err) {
        console.error(`Error: ${err.responce}`);
    }
}

export const turnPumpOff = (ip) => {

    try {
        axios.get(`http://${ip}/turnPumpOffServe`).
            then(res => tempStats = res.data).catch((error) => console.log("The error: ", error.code))
        return false;
    } catch (err) {
        console.error(`Error: ${err.responce}`);
    }
}


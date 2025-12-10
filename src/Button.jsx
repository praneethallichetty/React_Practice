import { useDispatch } from "react-redux";
import {addMoney, removeMoney} from "./store.js";


export default function Button() {
    const dispatch = useDispatch();
    return(
        <>
        <button onClick={() =>dispatch(removeMoney(500))}>Remove Money</button>
        <br></br>
         <br></br>
        <button onClick={() =>dispatch(addMoney(1000))}>Add Money</button>
        </>   
    )
}

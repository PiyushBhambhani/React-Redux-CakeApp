import { useDispatch, useSelector } from "react-redux"
import { buyIceCream } from "../redux";

function HooksIceCreamContainer(){
    const numOfIceCream= useSelector(state=>{
        return state.iceCream.numOfIceCream
    })
    const dispatch=useDispatch();
    return (
        <div>
            <h2>Num of Ice creams: {numOfIceCream}</h2>
            <button onClick={
                 ()=>{
                     dispatch(buyIceCream()) }}>Buy IceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer;
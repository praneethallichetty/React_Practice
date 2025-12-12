// import { useEffect, useState } from "react";

// export default function Counter() {

//     let [count, setCount] = useState(100);
//     let [state, setCount1] = useState(1000);
//     // For increase
//    useEffect(() => {
//         setTimeout(() => {
//             setCount(count = count + 1);
//         }, 1000);
//     }, [count]);
//     //For decrease
//     useEffect(() => {
//         setTimeout(() => {
//             setCount1(state = state - 1);
//         }, 1000);
//     }, [state]);

//     return (
//         <div>
//             <h1>The count is {count}</h1>
//             <h1>The count is {state}</h1>
//         </div>
//     )
// }


import React, { useState } from 'react'

const Counter = () => {
    let [state,setstate]=useState(0)

    let [count, setCount] = useState(100)
  return (
    <div>
      <button onClick={()=>setstate(state+1)}>Increment</button>
      <br></br> <br></br>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>the count is {state}</p>
      <p>The decreasing count is {count}</p>
    </div>
  )
}

export default Counter;



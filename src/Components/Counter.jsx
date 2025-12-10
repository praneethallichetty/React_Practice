// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// export default function Counter() {
//     let name = "Konidela"

//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0); 
//   };

//   useEffect(() => console.log("You clicked on button"), [count]);

//   return (
//     <>
//       <h1>The Count is: {count} {name}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }


export default function Counter() {

    let [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count = count + 1);
        }, 1000);
    }, [count]);

    return (
        <div>
            <h1>The count is {count}</h1>
        </div>
    )
}
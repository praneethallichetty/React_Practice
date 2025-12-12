import { useEffect, useState } from "react";


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
import { useState } from "react"

export default function Greeting(props) {
    let greet = "Have a good day :)"

    let [fname, setName] = useState("Allichetty Bunny")
    const update = () => {
        setName("Ram Charan")
    }
   
    return(
        <>
            <h2>Hello {props.fname} {greet}</h2>
            <h6>Hello {fname}</h6>
            <button onClick={update}>Click to change name</button>
            <h2>Age {props.age}</h2>
          
        </>
        
    )
}


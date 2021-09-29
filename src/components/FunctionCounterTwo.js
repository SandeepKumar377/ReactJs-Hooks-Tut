import React, { useState } from "react";

const FunctionCounterTwo =()=>{
    const initialCount= 0
    const [count, setCount] = useState(initialCount)

    const incrementFive=()=>{
        for (let i = 0; i < 5; i++) {
            setCount(prevCount=>prevCount+1)
        }
    }
    return(
        <div>
           <div><h1> Count:{count}</h1></div>
           {/* Not right way to use increment and decrement funtion */}

            {/* <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>          
            <button onClick={()=>setCount(count-1)}>Decrement</button> */}

            {/* correct way */}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>          
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>          
            <button onClick={incrementFive}>Increment Five</button>
        </div>
    )
}
export default FunctionCounterTwo
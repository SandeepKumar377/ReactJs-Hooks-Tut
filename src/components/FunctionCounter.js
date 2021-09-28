import React, { useState } from "react";

const FunctionCounter=()=>{
    const [count, setCount]= useState(0)

    return(
        <div>
            <h1>This is Function base counter</h1>
            <button onClick={()=>setCount(count+1)} >Count {count}</button>
        </div>
    )
}

export default FunctionCounter
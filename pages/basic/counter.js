import React, {useState} from "react";

export default function Counter() {
  const [count, setCount] = useState(0)
  return (<>
    <button onClick={() => setCount(count+1)}> 더하기 </button>
    <button onClick={() => setCount(count-1)}> 빼기 </button>
    <div>{count}</div>
    </>
  )
}
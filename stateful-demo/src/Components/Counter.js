import React,{useState} from 'react';

export default function Counter() {
   // const [count, setCount]=useState(0);
    const [count, setCount]=useState(()=>Math.random());
    const [query,setQuery]=useState("newQuery");
  return (
    <div><h1>Counter</h1>
    <button onClick={()=>{setCount(count-1)}}>Decrement </button>
  <p> You Clicked for {count} no. of times.</p> 
 <button onClick={()=>{setCount(count+1)}}>Increment </button>
 <input type="text" onChange={(e)=>{setQuery(e.target.value)}}/>
 <h4>{query}</h4>
    </div>
  )
}

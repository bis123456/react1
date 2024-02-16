import { useState } from "react";

// react useState Hook
const Content = () => {
    const handelnamechange=()=>{
        const names=["bis","ram","sam"];
        const int=Math.floor(Math.random()*3);
        return names[int]
      }
      const handleclick=()=>{
        console.log("yes Clicked it");
      }
      const handleclick2=(name)=>{
        console.log(`${name}`);
      }
    return (
     <main>
        <p>
            Hello {handelnamechange()}
        </p>
        <button onClick={handleclick}>click it</button>
        <button onClick={()=>handleclick2(handelnamechange())}>click it</button>  
     </main>
        
    )
}
export default Content;
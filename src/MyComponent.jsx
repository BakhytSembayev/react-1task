import { useState } from "react";

export const MyComponent = () =>{
    
    const [currentDate, setCurrentDate] = useState(new Date());
    setTimeout (()=>{
      setCurrentDate (new Date());
    },1000);
    
    return (
      <div>{currentDate.toISOString().substring(11,19)} {currentDate.getMonth() + 1}/{currentDate.getFullYear()}год
       </div>
    );
};
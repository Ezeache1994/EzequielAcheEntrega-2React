import { useState } from "react";

//la donacion minima arranca en 1000 pesos

export default function useCount(initialValue=0){
    const [count,setCount]=useState(initialValue);
const increment=()=>{
    setCount(count + 1000)
};

const decrement = ()=>{
    setCount(count-1000)
};

return{ count, increment, decrement  }

};
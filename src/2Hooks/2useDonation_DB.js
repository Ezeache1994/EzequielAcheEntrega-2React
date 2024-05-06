import { useEffect,useState } from "react";
import { getProductById } from "../3Mock/DBAsync";

export default function useDonation(id){
    const [products, setProducts]=useState([])
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        getProductById(id)
        .then((data)=>setProducts(data))
        .finally(()=>setIsLoading(false))
    },[])
return{products,isLoading};
};
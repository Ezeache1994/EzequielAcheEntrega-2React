import { useEffect,useState } from "react";
import { getAllProducts } from "../2Hooks/DB";



export default function useDonations(){
    const[products, setProducts]=useState([]);
    const[isLoading, setIsLoading]=useState(true);

useEffect(()=>{
    getAllProducts()
    .then((data)=>setProducts(data))
    .finally(()=> setIsLoading(false))
},[]);
return {products,isLoading}
};
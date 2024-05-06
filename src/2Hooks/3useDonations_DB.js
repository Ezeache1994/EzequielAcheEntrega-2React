import { useEffect,useState } from "react";
import { getProducts } from "../3Mock/DBAsync";



export default function useDonations(){
    const[products, setProducts]=useState([]);
    const[isLoading, setIsLoading]=useState(true);

useEffect(()=>{
    getProducts()
    .then((data)=>setProducts(data))
    .finally(()=> setIsLoading(false))
},[]);
return {products,isLoading}
};
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../2Hooks/DB";
import ItemListContainer from "../../3AllContainerItems/4ItemListContainer/ItemListContainer";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <div>
            <ItemListContainer category=""/>
        </div>
    );
}






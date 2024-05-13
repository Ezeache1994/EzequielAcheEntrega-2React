import React, { useEffect, useState } from "react";
import { getProductByCategory, getAllProducts } from "../../2Hooks/DB";
import ItemListContainer from "../../3AllContainerItems/4ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

export default function DonationList() {
    const [products, setProducts] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            let data;
            if (params.CategoryName) {
                data = await getProductByCategory(params.CategoryName);
            } else {
                data = await getAllProducts();
            }
            setProducts(data);
        };

        fetchProducts();
    }, [params.CategoryName]);

    return (
        <div>
            <ItemListContainer category={params.CategoryName} products={products} />
        </div>
    );
}






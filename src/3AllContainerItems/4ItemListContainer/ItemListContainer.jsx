import React from "react";
import useDonations from "../../4CustomsHooks/3useDonations";
import ItemList from "../2ItemList/ItemList";
import { getProductByCategory } from "../../2Hooks/DB"; // Importa la función getProductByCategory desde DB.js
import "./ItemListContainer.css"



export default function ItemListContainer({ category }) { // Agrega category como prop
    const { isLoading, products } = useDonations();

    if (isLoading) return (
        <div style={{ textAlign: "center", display: "flex" }}>
            <span style={{ fontSize: "17rem", color: "springgreen", textAlign: "center" }}> C </span>
            <h1 style={{ fontSize: "17rem", textAlign: "center" }}>argan </h1>
            <span style={{ fontSize: "17rem", color: "springgreen", textAlign: "center" }}>do... </span>
        </div>
    );

    // Si se proporciona una categoría, filtra los productos por esa categoría
    const filteredProducts = category ? products.filter(product => product.Category === category) : products;

    return (
        <div className="ItemListContainer__All--Elements">
            <ItemList products={filteredProducts} />
        </div>
    );
};







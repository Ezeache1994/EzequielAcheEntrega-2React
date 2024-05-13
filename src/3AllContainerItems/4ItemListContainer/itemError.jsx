// ItemError.jsx
import { useEffect, useState } from "react";
import { getProductByCategory } from "../../2Hooks/DB";
import"./ItemError.css"
export default function ItemError({ category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProductByCategory(category);
                setProducts(products);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (products.length === 0) {
        return <div>No hay productos disponibles para la categoría: {category}</div>;
    }

    return (
        <div className="ItemError__All--Elements">
            {/* Aquí puedes mostrar los elementos basados en la categoría */}
            {products.map((product, index) => (
                <div key={index}>
                    <img src={product.image} alt={`Product ${index}`} />
                    {/* Mostrar más detalles del producto si es necesario */}
                </div>
            ))}
        </div>
    );
};








import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../../3Mock/DBAsync";

export default function ProductDetail() {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(parseInt(productId));
      setProduct(product);
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

    //quiero que te bases en el "typeBusiness" unicamente 
  return (
    <div>

    </div> 
    // todo esto sustiduido solo por esto "typeBusiness"
  );
}

import ProductCard from "./ProductCard";
import { Product } from "./types";
/**
 * Garantir que cada ProductCard tenha um identificador único 
 * ProductCard key={product.id} 
 */
type Props = {
    products: Product[];
}

function ProductsList({ products }: Props) {

    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (<ProductCard key={product.id} product={product} />))}
            </div>
        </div>
    )
}

export default ProductsList
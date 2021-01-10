import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders() {
    // inicializando o state com uma lista vazia
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    console.log(products);

    // função js + lista de dependencia
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);
    /**
     * componente fiho emite evento para o componente pai onChangeLocation
     */

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders;
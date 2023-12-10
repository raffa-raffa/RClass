    import React from 'react';
    import { useParams } from 'react-router-dom';
    import { useFetch } from '../hooks/useFetch';
    import { Link } from 'react-router-dom';

    const Product = () => {
    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Ocorreu um erro...</p>;
    }

    return (
        <>
        <p>ID do produto: {id}</p>
        {product && (
            <div>
            <h1>{product.name}</h1>
            <p>R${product.price}</p>
            </div>
        )}
        {product && (
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        )}
        </>
    );
    };

    export default Product;

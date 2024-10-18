import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from './styles.module.scss';
import ProductCard from '../productCard';

export interface Product {
    id: number;
    image: string;
    product_name: string;
    price: number;
    stock_count: number;
}

const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: Product[][] = await response.json();
    return data.flat();
};

const ProductsSection: React.FC = () => {
    const { data: products, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const handleLoadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setVisibleCount(prevCount => prevCount + 6);
            setIsLoadingMore(false);
        }, 500);
    };

    if (isLoading) {
        return (
            <div className={styles.productsSection}>
                {[...Array(6)].map((_, index) => (
                    <div key={index} className={styles.skeletonCard}></div>
                ))}
            </div>
        );
    }

    if (error) return <div>Error loading products</div>;

    const visibleProducts = products?.slice(0, visibleCount);

    return (
        <div className={styles.productsSectionWrapper}>
            <div className={styles.productsSection}>
                {visibleProducts?.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {products && visibleCount < products.length && (
                <div className={styles.loadMoreContainer}>
                    <button
                        className={styles.loadMoreButton}
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                    >
                        {isLoadingMore ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductsSection;

import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import { Product } from '../productsSection';



interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const bgColor = useMemo(() => {
        if (!product.image) {
            return '#ffffff'; 
        }
        const match = product.image.match(/\/([0-9a-fA-F]{6})\//);
        return match ? `#${match[1]}` : '#ffffff';
    }, [product.image]);

    return (
        <div key={product.id} className={styles.card}>
            <div style={{ backgroundColor: bgColor }} className={styles.imageContainer}>
                <img src={product.image} alt={product.product_name} className={styles.image} />
            </div>
            <div className={styles.details}>
                <p className={styles.productName}>{product.product_name}</p>
                <p className={styles.price}>£{product.price}</p>
            </div>
        </div>
    );
}

export default React.memo(ProductCard);

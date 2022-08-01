import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from 'context/AppContext';

import styles from 'styles/ProductItem.module.scss';

import addToCartIcon from 'icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles['ProductItem']}>
      <Image
        loader={() => product.images[0]}
        src={product.images[0]}
        alt={product.title}
        width="100%"
        height="100%"
        layout="responsive"
      />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={addToCartIcon} alt="Agregar al carrito" unsized />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;

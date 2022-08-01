import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from 'context/AppContext';

import styles from 'styles/OrderItem.module.scss';

import close from 'icons/icon_close.png';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className={styles['OrderItem']}>
      {product && (
        <>
          <figure>
            <Image
              src={product.images[0]}
              alt={product.title}
              width="100%"
              height="100%"
              layout="responsive"
            />
          </figure>
          <p>{product.title}</p>
          <p>${product.price}</p>
          <Image
            src={close}
            alt="close"
            onClick={() => handleRemove(product)}
            unsized
          />
        </>
      )}
    </div>
  );
};

export default OrderItem;

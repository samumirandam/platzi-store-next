import React from 'react';
import Image from 'next/image';

import styles from 'styles/ProductInfo.module.scss';

import addToCartIcon from 'icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
        width="100%"
        height="100%"
        layout="responsive"
      />
      <div className={styles['ProductInfo']}>
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <button className={styles[('primary-button', 'add-to-cart-button')]}>
          <Image src={addToCartIcon} alt="add to cart" unsized />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;

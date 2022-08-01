import React from 'react';
import ProductInfo from 'components/ProductInfo';
import Image from 'next/image';

import styles from 'styles/ProductDetail.module.scss';

import close from 'icons/icon_close.png';

const ProductDetail = () => {
  return (
    <aside className={styles['ProductDetail']}>
      <div className={styles['ProductDetail-close']}>
        <Image src={close} alt="close" unsized />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;

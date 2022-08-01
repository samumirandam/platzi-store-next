import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Menu from 'components/Menu';
import MyOrder from 'containers/MyOrder';

import AppContext from 'context/AppContext';

import styles from 'styles/Header.module.scss';

import menu from 'icons/icon_menu.svg';
import logo from 'logos/logo_yard_sale.svg';
import shoppingCart from 'icons/icon_shopping_cart.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav className={styles['Nav']}>
      <Image src={menu} alt="menu" className={styles['menu']} unsized />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} unsized />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li
            className={styles['navbar-email']}
            onClick={handleToggle}
            aria-hidden="true"
          >
            platzi@example.com
          </li>
          <li
            className={styles['navbar-shopping-cart']}
            onClick={handleToggleOrders}
            aria-hidden="true"
          >
            <Image src={shoppingCart} alt="shopping cart" unsized />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;

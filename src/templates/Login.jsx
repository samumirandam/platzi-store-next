import React, { useRef } from 'react';
import Image from 'next/image';
import styles from 'styles/Login.module.scss';

import logo from 'logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={styles['Login']}>
      <div className={styles['Login-container']}>
        <Image src={logo} alt="logo" className={styles['logo']} unsized />
        <form action="/" className={styles['form']} ref={form}>
          <label htmlFor="email" className={styles['label']}>
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            className={styles[('input', 'input-email')]}
          />
          <label htmlFor="password" className={styles['label']}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className={styles[('input', 'input-password')]}
          />
          <button
            className={styles[('primary-button', 'login-button')]}
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className={styles[('secondary-button', 'signup-button')]}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;

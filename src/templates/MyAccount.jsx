import React from 'react';
import styles from 'styles/MyAccount.module.scss';

const MyAccount = () => {
  return (
    <div className={styles['MyAccount']}>
      <div className={styles['MyAccount-container']}>
        <h1 className={styles['title']}>My account</h1>
        <form action="/" className={styles['form']}>
          <div>
            <label for="name" className={styles['label']}>
              Name
            </label>
            <p className={styles['value']}>Camila Yokoo</p>
            <label for="email" className={styles['label']}>
              Email
            </label>
            <p className={styles['value']}>camilayokoo@gmail.com</p>
            <label for="password" className={'label'}>
              Password
            </label>
            <p className={styles['value']}>*********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className={styles[('secondary-button', 'login-button')]}
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;

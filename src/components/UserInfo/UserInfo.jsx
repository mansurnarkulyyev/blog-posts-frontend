import React from 'react';
// import { useSelector } from 'react-redux';
import styles from './user-info.module.scss';

import avatar from './noavatar.png'

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {

  // const userData = useSelector((state) => state.auth.data);


  // console.log(userData)


  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatarUrl || avatar} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};

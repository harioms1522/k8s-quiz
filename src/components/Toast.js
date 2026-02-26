import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div className={`${styles.toast} ${show ? styles.show : ''}`}>
      {message}
    </div>
  );
};

export default Toast;


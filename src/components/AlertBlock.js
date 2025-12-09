import React from 'react';
import clsx from 'clsx'; // For conditional class names

import styles from './AlertBlock.module.css'; // Assuming CSS Modules for styling

const AlertBlock = ({ type = 'info', title, children }) => {
  const alertClass = clsx(
    styles.alertBlock,
    styles[`alertBlock--${type}`]
  );

  return (
    <div className={alertClass} role="alert">
      {title && <div className={styles.alertBlockTitle}>{title}</div>}
      <div className={styles.alertBlockContent}>{children}</div>
    </div>
  );
};

export default AlertBlock;

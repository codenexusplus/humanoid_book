import React from 'react';
import clsx from 'clsx'; // Assuming clsx is used for styling

import styles from './AlertBlock.module.css';

function AlertBlock({ type = 'info', title, children }) {
  return (
    <div className={clsx(styles.alertBlock, styles[type])}>
      {title && <div className={styles.alertTitle}>{title}</div>}
      <div className={styles.alertContent}>{children}</div>
    </div>
  );
}

export default AlertBlock;

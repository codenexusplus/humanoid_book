import React from 'react';
import clsx from 'clsx'; // Assuming clsx is used for styling

import styles from './TipBlock.module.css';

function TipBlock({ title, children }) {
  return (
    <div className={clsx(styles.tipBlock)}>
      {title && <div className={styles.tipTitle}>{title}</div>}
      <div className={styles.tipContent}>{children}</div>
    </div>
  );
}

export default TipBlock;

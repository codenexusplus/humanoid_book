import React from 'react';
import clsx from 'clsx'; // For conditional class names

import styles from './TipBlock.module.css'; // Assuming CSS Modules for styling

const TipBlock = ({ title, children }) => {
  return (
    <div className={clsx(styles.tipBlock, styles['tipBlock--info'])} role="note">
      {title && <div className={styles.tipBlockTitle}>{title}</div>}
      <div className={styles.tipBlockContent}>{children}</div>
    </div>
  );
};

export default TipBlock;

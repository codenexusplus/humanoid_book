import React from 'react';
import clsx from 'clsx'; // For conditional class names

import styles from './HardwareBlock.module.css'; // Assuming CSS Modules for styling

const HardwareBlock = ({ title, children }) => {
  return (
    <div className={clsx(styles.hardwareBlock, styles['hardwareBlock--default'])} role="complementary">
      {title && <div className={styles.hardwareBlockTitle}>{title}</div>}
      <div className={styles.hardwareBlockContent}>{children}</div>
    </div>
  );
};

export default HardwareBlock;

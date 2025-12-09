import React from 'react';
import clsx from 'clsx'; // Assuming clsx is used for styling

import styles from './HardwareBlock.module.css';

function HardwareBlock({ title, children }) {
  return (
    <div className={clsx(styles.hardwareBlock)}>
      {title && <div className={styles.hardwareTitle}>{title}</div>}
      <div className={styles.hardwareContent}>{children}</div>
    </div>
  );
}

export default HardwareBlock;

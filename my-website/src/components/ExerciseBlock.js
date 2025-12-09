import React, { useState } from 'react';
import clsx from 'clsx'; // Assuming clsx is used for styling

import styles from './ExerciseBlock.module.css';

function ExerciseBlock({ title, children, solution }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className={clsx(styles.exerciseBlock)}>
      {title && <div className={styles.exerciseTitle}>{title}</div>}
      <div className={styles.exerciseContent}>{children}</div>
      {solution && (
        <div className={styles.solutionSection}>
          <button
            className={styles.solutionToggle}
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
          {showSolution && <div className={styles.solutionContent}>{solution}</div>}
        </div>
      )}
    </div>
  );
}

export default ExerciseBlock;

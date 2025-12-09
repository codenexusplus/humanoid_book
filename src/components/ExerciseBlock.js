import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ExerciseBlock.module.css';

const ExerciseBlock = ({ title, children, solution }) => {
  const [showSolution, setShowSolution] = useState(false);

  const toggleSolution = () => {
    setShowSolution((prev) => !prev);
  };

  return (
    <div className={styles.exerciseBlock}>
      {title && <h3 className={styles.exerciseBlockTitle}>{title}</h3>}
      <div className={styles.exerciseBlockProblem}>{children}</div>

      {solution && (
        <div className={styles.exerciseBlockSolutionContainer}>
          <button onClick={toggleSolution} className={styles.toggleButton}>
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
          {showSolution && <div className={styles.exerciseBlockSolution}>{solution}</div>}
        </div>
      )}
    </div>
  );
};

export default ExerciseBlock;

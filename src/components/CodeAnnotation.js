import React from 'react';
import clsx from 'clsx';
import styles from './CodeAnnotation.module.css';

// This component is designed to work with Docusaurus CodeBlock,
// but for now, it provides a basic structure to display code with annotations.
// Full integration with Docusaurus CodeBlock may require swizzling or
// custom rendering within MDX.
const CodeAnnotation = ({ children, annotationText = {}, highlights, title }) => {
  // Assuming children is the raw code string or a pre-formatted code block
  const codeLines = children ? children.split('\n') : [];

  const getLineClasses = (lineNumber) => {
    let classes = {};
    if (highlights) {
      const highlightRanges = highlights.split(',').map(s => s.trim());
      for (const range of highlightRanges) {
        if (range.includes('-')) {
          const [start, end] = range.split('-').map(Number);
          if (lineNumber >= start && lineNumber <= end) {
            classes[styles.highlightedLine] = true;
          }
        } else if (Number(range) === lineNumber) {
          classes[styles.highlightedLine] = true;
        }
      }
    }
    if (annotationText[lineNumber]) {
      classes[styles.lineWithAnnotation] = true;
    }
    return clsx(classes);
  };

  return (
    <div className={styles.codeAnnotationBlock}>
      {title && <div className={styles.codeAnnotationTitle}>{title}</div>}
      <div className={styles.codeContentWrapper}>
        <pre className={styles.codeBlock}>
          <code>
            {codeLines.map((line, index) => {
              const lineNumber = index + 1;
              return (
                <div key={index} className={getLineClasses(lineNumber)}>
                  <span className={styles.lineNumber}>{lineNumber}.</span>{' '}
                  <span className={styles.lineText}>{line}</span>
                  {annotationText[lineNumber] && (
                    <span className={styles.inlineAnnotation}>
                      {' '}/* {annotationText[lineNumber]} */
                    </span>
                  )}
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeAnnotation;

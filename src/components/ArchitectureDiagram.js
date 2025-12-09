import React from 'react';
import clsx from 'clsx';
import styles from './ArchitectureDiagram.module.css';

const ArchitectureDiagram = ({ src, alt, annotations = [], responsive = true }) => {
  return (
    <div className={clsx(styles.diagramContainer, { [styles.responsive]: responsive })}>
      <img src={src} alt={alt} className={styles.diagramImage} />
      {annotations.map((annotation, index) => (
        <div
          key={index}
          className={styles.diagramAnnotation}
          style={annotation.position}
        >
          {annotation.text}
        </div>
      ))}
    </div>
  );
};

export default ArchitectureDiagram;

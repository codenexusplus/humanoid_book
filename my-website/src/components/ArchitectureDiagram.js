import React from 'react';
import clsx from 'clsx'; // Assuming clsx is used for styling

import styles from './ArchitectureDiagram.module.css';

function ArchitectureDiagram({ src, alt, annotations = [], responsive = true }) {
  return (
    <div className={clsx(styles.architectureDiagramContainer, responsive && styles.responsive)}>
      <img src={src} alt={alt} className={styles.diagramImage} />
      {annotations.map((annotation, index) => (
        <div
          key={index}
          className={styles.annotation}
          style={{ left: annotation.position.x, top: annotation.position.y }}
        >
          {annotation.text}
        </div>
      ))}
    </div>
  );
}

export default ArchitectureDiagram;

import React, { useState, useCallback } from 'react';
import styles from '../styles/MapBackground.module.css';

export default function MapBackground() {
  const [selectedDot, setSelectedDot] = useState(null);
  const [mapZoomed, setMapZoomed] = useState(false);

  const planDots = [
    { id: 1, type: 'personal', x: 30, y: 20, title: 'Light Show' },
    { id: 2, type: 'public', x: 50, y: 40, title: 'Bouldering' },
    { id: 3, type: 'public', x: 70, y: 60, title: 'Library' },
    { id: 4, type: 'personal', x: 40, y: 70, title: 'Coffee Meet' }
  ];

  const handleDotClick = useCallback((dot) => {
    setSelectedDot(dot);
    setMapZoomed(true);
    setTimeout(() => {
      setMapZoomed(false);
    }, 3000);
  }, []);

  return (
    <div className={`${styles.mapContainer} ${mapZoomed ? styles.zoomed : ''}`}>
      <div className={styles.mapOverlay}>
        {planDots.map((dot) => (
          <div
            key={dot.id}
            className={`${styles.planDot} ${styles[dot.type]} ${selectedDot?.id === dot.id ? styles.selected : ''}`}
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              '--dot-x': `${dot.x}%`,
              '--dot-y': `${dot.y}%`
            }}
            onClick={() => handleDotClick(dot)}
          >
            {selectedDot?.id === dot.id && (
              <div className={styles.dotLabel}>{dot.title}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 
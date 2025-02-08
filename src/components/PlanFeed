import React from 'react';
import styles from '../styles/PlanFeed.module.css';

// PlanFeed component displays a list of plans
const PlanFeed = () => {
  const plans = [
    {
      id: 1,
      title: "LIGHT SHOW",
      time: "15:00",
      location: "Plays Razzmatazz",
      coverColor: "#FF375F",
      attendees: 14,
      isLiked: true,
      isGoing: true
    },
    {
      id: 2,
      title: "BOULDERING",
      time: "15:00",
      location: "Boulder Gym",
      coverColor: "#32D74B",
      attendees: 6,
      isLiked: false,
      isGoing: false
    }
  ];

  return (
    <div className={styles.feedContainer}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <svg className={styles.clockIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>

      <div className={styles.filters}>
        <button className={`${styles.filterButton} ${styles.active}`}>Friends</button>
        <button className={styles.filterButton}>Public</button>
        <button className={styles.filterButton}>Sport</button>
        <button className={styles.filterButton}>Food</button>
        <button className={styles.filterButton}>Entertainment</button>
      </div>

      <div className={styles.plansList}>
        {plans.map(plan => (
          <div key={plan.id} className={styles.planCard}>
            <div className={styles.planCover} style={{ backgroundColor: plan.coverColor }} />
            <div className={styles.planContent}>
              <h3>{plan.title}</h3>
              <div className={styles.planDetails}>
                <span>{plan.time}</span>
                <span>{plan.location}</span>
              </div>
              <div className={styles.planFooter}>
                <div className={styles.attendees}>
                  <div className={styles.avatarStack}>
                    <div className={styles.avatar} />
                    <div className={styles.avatar} />
                  </div>
                  <span>+{plan.attendees}</span>
                </div>
                <div className={styles.actions}>
                  <button className={`${styles.actionButton} ${plan.isLiked ? styles.liked : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={plan.isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                  <button className={`${styles.actionButton} ${plan.isGoing ? styles.going : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanFeed;
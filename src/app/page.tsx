"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import PlanFeed from './components/PlanFeed';
import MapBackground from './components/MapBackground';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      <Head>
        <title>RADAR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <h1 className={styles.logo}>RADAR</h1>
        </div>
        <MapBackground />
        <PlanFeed />
        <Navigation />
      </div>
    </>
  );
}

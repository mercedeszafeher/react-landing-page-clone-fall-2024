import React from 'react';
import styles from '../css/SyncAllPurchase.module.css';
import checkmark from '../images/green_tick.webp';
import SyncPhoto from '../images/SyncAllPurchase.webp';

export default function SyncAllPurchase() {
  return (
    <section className={styles.syncAllPurchase}>
      <div className={styles.imageSection}>
        <img src={SyncPhoto} alt="SyncPhoto" />
      </div>
      <div className={styles.textSection}>
        <h1>Automatically sync all your purchases</h1>
        <h3>
          Manage your returns from top retailers, stay on top of return
          policies, and track your purchases all in one place.
        </h3>
        <ul className={styles.featureList}>
          <li>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            View your purchases from Gmail, Amazon, and Target
          </li>
          <li>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            Keep track of return dates and policies
          </li>
          <li>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            Keep track of return dates and policies
          </li>
        </ul>
      </div>
    </section>
  );
}

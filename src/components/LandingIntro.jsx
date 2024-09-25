import React from 'react';
import styles from '../css/LandingIntro.module.css';
import appleStore from '../images/app_store.webp';
import googlePlay from '../images/google_play.webp';
import checkmark from '../images/green_tick.webp';
import Intro from '../images/landing_intro.webp';

export default function LandingIntro() {
  return (
    <section className={styles.landingIntro}>
      <div className={styles.textSection}>
        <h1>
          <span className={styles.purpleText}>Returns</span> picked <br /> up
          from your <br />
          <span className={styles.purpleText}>doorstep</span>
        </h1>
        <ul className={styles.featureList}>
          <li>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            No packaging or printing
          </li>
          <li>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            No post office trips
          </li>
          <li>
            <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
            No more missed refunds
          </li>
        </ul>
        <div className={styles.downloadButtons}>
          <img
            src={appleStore}
            alt="Download on Apple Store"
            className={styles.storeButton}
          />
          <img
            src={googlePlay}
            alt="Download on Google Play"
            className={styles.storeButton}
          />
        </div>
      </div>
      <div className={styles.imageSection}>
        <img src={Intro} alt="Intro" />
      </div>
    </section>
  );
}

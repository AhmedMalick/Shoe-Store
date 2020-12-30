import React from 'react';
import { Link } from 'react-router-dom';
import styles from './aboutus.module.css';

function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <Link className={styles.btn} to="/">Back to Home</Link>
    </div>
  );
}

export default AboutUs;
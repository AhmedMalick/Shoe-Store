import React from 'react';
import { Link } from 'react-router-dom';
import styles from './contactus.module.css';

function ContactUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <Link className={styles.btn} to="/">Back to Home</Link>
    </div>
  );
}

export default ContactUs;
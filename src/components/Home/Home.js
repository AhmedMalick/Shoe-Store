import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="product">Product</Link></li>
            <li><Link to="aboutus">About Us</Link></li>
            <li><Link to="contactus">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <h1>Shoe Store</h1>
          <p className={styles.p}>Knowing what to do is one thing, <br /> but knowing why you do it is everything.</p>
          <Link className={styles.btn} to="product">Get Your Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
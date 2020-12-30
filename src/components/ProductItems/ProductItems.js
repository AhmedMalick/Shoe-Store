import React from 'react';
import Shoes from '../../data/data.json';
import { useParams } from 'react-router-dom';
import styles from './productitems.module.css';
import { Link } from 'react-router-dom';

function ProductItems() {

  const { id } = useParams();
  const shoe = Shoes[id]

  console.log(shoe)

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product Items</h1>
      <div className={styles.col}>
        <p className={styles.p}>{shoe.name}</p>
        <img src={shoe.img} alt="product-item" height="600" width="600" />
      </div>
      <Link className={styles.btn} to="/">Back to Home</Link>
    </div>
  );
}

export default ProductItems;
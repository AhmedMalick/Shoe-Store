import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from '../../data/data.json';
import styles from './product.module.css';

function Product() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product</h1>
      <div className={styles.row}>
        {Object.keys(Shoes).map(keyName => {

          const shoe = Shoes[keyName];

          return (
            <Link className={styles.col} key={keyName}
              to={`/productitems/${keyName}`}>
              <img src={shoe.img} alt="shoe" height={200} width={200} />
              <p className={styles.p}>{shoe.name}</p>
            </Link>)
        })}
        <Link className={styles.btn} to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default Product;
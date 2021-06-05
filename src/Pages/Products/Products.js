import NavBar from '../../Components/NavBar/NavBar'
import Shoes from '../../data/data.json'
import { Link } from 'react-router-dom'
import styles from './Products.module.css'

const Products = () => {
    return (
        <div>
            <NavBar />
            <div className={styles.small_container}>
                <div className={`${styles.row_2} ${styles.row}`}>
                    <h2>All Products</h2>
                    <select>
                        <option value="">Default Sorting</option>
                        <option value="">Sort by Price</option>
                        <option value="">Sort by Popularity</option>
                        <option value="">Sort by Rating</option>
                        <option value="">Sort by Sale</option>
                    </select>
                </div>
                <div className={styles.row}>
                    {Object.keys(Shoes).map((keyName, index) => (
                        <Link className={styles.col_3} key={index} to={`/productitem/${keyName}`}>
                            <img src={Shoes[keyName].img} alt={Shoes[keyName].name} />
                            <h4>{Shoes[keyName].name}</h4>
                            <p>${Shoes[keyName].price}</p>
                        </Link>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products

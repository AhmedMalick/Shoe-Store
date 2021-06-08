import NavBar from '../../Components/NavBar/NavBar'
import Shoes from '../../data/data.json'
import { useParams } from 'react-router-dom'
import styles from './ProductItem.module.css'

const ProductItmem = () => {

    const { id } = useParams();
    const shoe = Shoes[id]

    return (
        <div>
            <NavBar />
            <div className={`${styles.small_container} ${styles.single_product}`}>
                <div className={styles.row}>
                    <div className={styles.col_1}>
                        <img src={shoe.img} alt={shoe.name} width='100%' />
                    </div>
                    <div className={styles.col_1}>
                        <h1>{shoe.name}</h1>
                        <h4>${shoe.price}</h4>
                        <form>
                            <select>
                                <option>Select Size</option>
                                <option>XXL</option>
                                <option>XL</option>
                                <option>Large</option>
                                <option>Medium</option>
                                <option>Small</option>
                            </select>
                            <input type='number' value='1' />
                        </form>
                        <p className={styles.btn}>Add to Cart</p>
                        <h3>Product Detail</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio maiores,
                            nemo molestias officia_aliquid placeat, sequi numquam aut officiis atque odio delectus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItmem

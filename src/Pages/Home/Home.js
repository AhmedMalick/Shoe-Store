import NavBar from '../../Components/NavBar/NavBar'
import image_1 from '../../Assests/image1.png'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.header}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_1}>
            <h1>Give your Workout a New Style</h1>
            <p>Success isn't always about greatness. It's about consistency. Consistent hard work gain success. Greatness will come.</p>
            <Link to='/products' className={styles.btn}>Explore More</Link>
          </div>
          <div className={styles.col_1}>
            <img src={image_1} alt='Background' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
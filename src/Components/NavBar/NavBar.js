import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import logo from '../../Assests/logo.png'
import cart from '../../Assests/cart.png'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img src={logo} alt='RedStore' width='125px' />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                </ul >
            </nav >
            <FaBars className={styles.menu_icon} onClick={() => setDisplay(!display)} />
            <img src={cart} alt='Cart' width='30px' height='30px' />
        </div >
    )
}

export default NavBar

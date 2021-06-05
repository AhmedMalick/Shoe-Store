import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../Assests/logo.png'
import cart from '../../Assests/cart.png'

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img src={logo} width='125px' />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                </ul>
            </nav>
            <img src={cart} width='30px' height='30px' />
        </div>
    )
}

export default NavBar

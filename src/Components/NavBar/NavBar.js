import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart.png'
import menu from '../../Assets/menu.png'
import styles from './NavBar.module.css'

const NavBar = () => {

    let [menuIcon, setMenuIcon] = useState(false);

    return (
        <div className={styles.navbar}>
            <div>
                <Link to='/'>
                    <img src={logo} alt='RedStore' width='125px' />
                </Link>
            </div>
            <nav>
                <ul style={{
                    maxHeight: menuIcon ? '200px' : '0px'
                }}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                </ul>
            </nav>
            <img src={cart} alt='Cart' width='30px' height='30px' />
            <img
                className={styles.menu_icon}
                src={menu}
                alt='Menu Icon'
                onClick={() => setMenuIcon(!menuIcon)}
            />
        </div>
    )
}

export default NavBar

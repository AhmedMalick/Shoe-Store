import NavBar from '../../Components/NavBar/NavBar'
import image_1 from '../../Assests/image1.png'
import styles from './Contactus.module.css'

const ContactUs = () => {
  return (
    <div className={styles.contact_page}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_1}>
            <img src={image_1} alt='Background' width='100%' />
          </div>
          <div className={styles.col_1}>
            <div className={styles.form_container}>
              <span>Reach Us</span>
              <hr className={styles.indicator} />
              <form>
                <input type='text' placeholder='Your Name' />
                <input type='password' placeholder='Your Email' />
                <textarea type='password' placeholder='Your Comments' />
                <button className={styles.btn} type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
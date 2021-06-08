import NavBar from '../../Components/NavBar/NavBar'
import image_1 from '../../Assets/image1.png'
import styles from './Aboutus.module.css'

const AboutUs = () => {
  return (
    <div className={styles.about_page}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_1}>
            <img src={image_1} alt='Background' width='100%' />
          </div>
          <div className={styles.col_1}>
            <div className={styles.about_container}>
              <span>Who we are?</span>
              <hr className={styles.indicator} />
              <div className={styles.content}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolorum debitis nemo dignissimos eveniet minus odit quod officiis unde tempora sit iusto sunt, illum nisi dicta totam eum ex! Ducimus fugiat officiis distinctio, facilis libero, ut deserunt incidunt non earum obcaecati exercitationem eos, praesentium pariatur cupiditate alias! Minus, ducimus similique! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reprehenderit assumenda
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
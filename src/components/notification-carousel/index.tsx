import styles from './styles.module.css'
import card1 from '../../assets/images/Card1.png'
import card2 from '../../assets/images/Card2.png'
import card3 from '../../assets/images/Card3.png'

const NotificationCarousel = () => {
  return (
    <div
      id='notification-carousel'
      className={styles.carousel}
    >
      {[card1, card2, card3].map((card) => (
        <img
          className={styles.dashboard}
          src={card}
          alt='Dashboard'
          width='189'
          height='171'
        />
      ))}
    </div>
  )
}
export default NotificationCarousel

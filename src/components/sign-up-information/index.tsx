import Typography from '../../uiKit/Typography'
import styles from './styles.module.css'
import Dashboard from '../../assets/images/dashboard.png'
import WatchIcon from '../../assets/icons/watch-icon'
import LogoIcon from '../../assets/icons/logo-icon'
import NotificationDescription from '../notification-description'
import WatchDescription from '../watch-description'
import NotificationCarousel from '../notification-carousel'
import TestimonialCarousel from '../testimonial-carousel'

const SignupInformation = () => {
  return (
    <section className={styles.signupInformationWrapper}>
      <div className={styles.top}>
        <NotificationDescription />
        <NotificationCarousel />
      </div>
      <div className={styles.middle}>
        <img
          className={styles.dashboard}
          src={Dashboard}
          alt='Dashboard'
          width='335'
          height='306'
        />
        <WatchDescription />
      </div>
      <div className={styles.testimonial_text}>
        <Typography
          variant='heading-5'
          color='#F2F2F2'
        >
          Testimonials
        </Typography>
        <div className={styles.divider}> </div>
      </div>
      <div className={styles.bottom}>
        <LogoIcon />
        <TestimonialCarousel />
      </div>
    </section>
  )
}
export default SignupInformation

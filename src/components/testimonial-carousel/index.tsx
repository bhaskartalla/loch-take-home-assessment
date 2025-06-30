import styles from './styles.module.css'
import testimonial1 from '../../assets/images/testimonial1.png'
import testimonial2 from '../../assets/images/testimonial2.png'

const TestimonialCarousel = () => {
  return (
    <div
      id='testimonial-carousel'
      className={styles.carousel}
    >
      {[testimonial1, testimonial2].map((testimonial) => (
        <img
          className={styles.testimonial}
          src={testimonial}
          alt='Dashboard'
          width='353'
          height='136'
        />
      ))}
    </div>
  )
}
export default TestimonialCarousel

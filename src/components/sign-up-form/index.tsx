import Typography from '../../uiKit/Typography'
import styles from './styles.module.css'

const SignUpForm = () => {
  return (
    <section className={styles.signUpFormWrapper}>
      <div className={styles.signUpForm}>
        <Typography
          variant='heading-3'
          color='#B0B1B3'
        >
          Sign up for exclusive access.
        </Typography>
        <input
          className={styles.input_text}
          placeholder='Your email address'
          type='email'
          id='email'
          name='email'
          required
        />
        <button
          className={styles.get_started}
          onClick={() =>
            window.location.assign('https://app.loch.one/welcome.')
          }
        >
          <Typography
            variant='button-label'
            color='#FFFFFF'
          >
            Get started
          </Typography>
        </button>
      </div>
      <Typography
        variant='button-label'
        color='#19191A'
      >
        You'll receive an email with an invite link to join.
      </Typography>
    </section>
  )
}
export default SignUpForm

import SignupForm from '../components/sign-up-form'
import SignupInformation from '../components/sign-up-information'
import styles from './styles.module.css'

const index = () => {
  return (
    <main className={styles.signUpMain}>
      <section
        id='sign-up-information'
        className={styles.signUpInformation}
      >
        <SignupInformation />
      </section>
      <section
        id='sign-up-form'
        className={styles.signUpForm}
      >
        <SignupForm />
      </section>
    </main>
  )
}
export default index

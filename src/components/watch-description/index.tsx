import WatchIcon from '../../assets/icons/watch-icon'
import Typography from '../../uiKit/Typography'
import styles from './styles.module.css'

const WatchDescription = () => {
  return (
    <div className={styles.dashboard_desc}>
      <WatchIcon />
      <Typography
        variant='heading-4'
        color='#F2F2F2'
        style={{ textAlign: 'right' }}
      >
        Watch what the whales are doing
      </Typography>
      <Typography
        variant='body'
        color='#F2F2F2'
        style={{ textAlign: 'right' }}
      >
        All whales are not equal. Know exactly what the whales impacting YOUR
        portfolio are doing.
      </Typography>
    </div>
  )
}
export default WatchDescription

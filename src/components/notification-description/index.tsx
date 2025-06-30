import NotificationIcon from '../../assets/icons/notification-icon'
import Typography from '../../uiKit/Typography'
import styles from './styles.module.css'

const NotificationDescription = () => {
  return (
    <div className={styles.notifications_desc}>
      <NotificationIcon />
      <Typography
        variant='heading-4'
        color='#F2F2F2'
        style={{
          textShadow: ' 1px 1px 2px #00000080',
          WebkitTextStroke: '1px #000',
        }}
      >
        Get notified when a highly correlated whale makes a move
      </Typography>
      <Typography
        variant='body'
        color='#F2F2F2'
      >
        Find out when a certain whale moves more than any preset amount on-chain
        or when a dormant whale you care about becomes active.
      </Typography>
    </div>
  )
}
export default NotificationDescription

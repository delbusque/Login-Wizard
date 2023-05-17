import styles from './VerificationSuccess.module.css';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper';
import Header from '../../components/Header/Header';
import successMark from '../../images/success.png'

const VerificationSuccess = () => {
    return (
        <SiteWrappper>
            <Header />
            <h3 className={styles['title']}>Verify your mobile number.</h3>

            <div className={styles['card']}></div>
            <div className={styles['card-progress']}></div>
            <div className={styles['progress']}></div>

            <img src={successMark} alt='success'
                className={styles['success-img']} />

            <h4 className={styles['status-text']}>Verification successful!</h4>
        </SiteWrappper>
    )
}

export default VerificationSuccess;
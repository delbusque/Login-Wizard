import styles from './VerifyEmail.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import arrowLeft from '../../images/arrow-left1.png';
import envelope from '../../images/email.png';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper';

const VerifyEmail = () => {
    return (
        <SiteWrappper>
            <Header />

            <h3 className={styles['title']}>Verify your email address</h3>

            <Card />

            <img src={arrowLeft} alt='arrow' className={styles['card-arrow']} />

            <h5 className={styles['desc']}>A 6-digit code has been sent to <span>youremail@emaildomain.com</span></h5>

            <img src={envelope} alt='envelope' className={styles['card-envelope']} />

            <p className={styles['redirect']}>Send verification code on mobile no.</p>
        </SiteWrappper>
    )
}

export default VerifyEmail;
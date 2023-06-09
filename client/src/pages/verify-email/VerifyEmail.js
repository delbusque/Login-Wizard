import styles from './VerifyEmail.module.css';

import { Link } from 'react-router-dom';

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

            <Link to='/auth'><img src={arrowLeft} alt='arrow' className={styles['card-arrow']} /></Link>

            <h5 className={styles['desc']}>A 6-digit code has been sent to <span>youremail@emaildomain.com</span></h5>

            <img src={envelope} alt='envelope' className={styles['card-envelope']} />

            <Link to='/verify-mobile'><p className={styles['redirect']}>Send verification code on mobile no.</p></Link>
        </SiteWrappper>
    )
}

export default VerifyEmail;
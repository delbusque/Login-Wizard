import { Link } from 'react-router-dom';

import styles from './VerificationSuccess.module.css';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper';
import Header from '../../components/Header/Header';
import successMark from '../../images/success.png'
import arrowRight from '../../images/arrow-right1.png'

const VerificationSuccess = () => {
    return (
        <SiteWrappper>
            <Header />
            <h3 className={styles['title']}>Verification successful!</h3>

            <div className={styles['card']}></div>
            <div className={styles['card-progress']}></div>
            <div className={styles['progress']}></div>

            <img src={successMark} alt='success'
                className={styles['success-img']} />

            <h4 className={styles['status-text']}>Verification successful!</h4>
            <Link to='/logs'><img className={styles['success-arrow']} src={arrowRight} alt='arrow' /></Link>
        </SiteWrappper>
    )
}

export default VerificationSuccess;
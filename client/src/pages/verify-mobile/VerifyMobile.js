import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import arrowLeft from '../../images/arrow-left1.png';
import mobileAndroid from '../../images/mobile-android-alt1.png';

import styles from './VerifyMobile.module.css';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper';

const VerifyMobile = () => {
    return (
        <SiteWrappper>

            <Header />
            <Card />

            <h3 className={styles['title-number']}>Verify your mobile number</h3>

            <img src={arrowLeft} alt='arrow' className={styles['card-arrow']} />

            <h5 className={styles['desc-number']}>A 6-digit code has been sent as a text messge to <span>+1 900-00-1234</span></h5>

            <img src={mobileAndroid} alt='mobile-phone' className={styles['card-phone']} />

            <p className={styles['redirect']}>Send verification code on email</p>

        </SiteWrappper>
    )
}

export default VerifyMobile;
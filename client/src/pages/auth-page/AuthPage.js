import Header from '../../components/Header';
import styles from './AuthPage.module.css';
import arrowLeft from '../../images/arrow-left1.png';
import mobileAndroid from '../../images/mobile-android-alt1.png';

const AuthPage = () => {
    return (
        <div className={styles['auth-container']}>

            <Header />

            <h3 className={styles['auth-title']}>Welcome to Website</h3>
            <div className={styles['auth-card']}></div>
            <div className={styles['card-progress']}></div>
            <div className={styles['progress']}></div>

            <img src={arrowLeft} alt='arrow' className={styles['card-arrow']} />


            <h4 className={styles['card-title']}>Enter your mobile no. and email</h4>

            <img src={mobileAndroid} alt='mobile-phone' className={styles['card-phone']} />

            <p className={styles['card-terms']}>By signing up, I agree to the <span>Privacy Policy</span> & <span>Terms of Use</span></p>

            <form className={styles['card-form']}>

                <label className={styles['label-mobile']}>Mobile no.</label>
                <input className={styles['input-mobile']} placeholder='Enter your mobile no.'></input>

                <label className={styles['label-email']}>Email Address</label>
                <input className={styles['input-email']} placeholder='Enter your email id'></input>

                <button>Continue</button>
            </form>

        </div>
    )
}

export default AuthPage;
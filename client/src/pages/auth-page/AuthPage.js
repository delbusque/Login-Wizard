import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import styles from './AuthPage.module.css';
import arrowLeft from '../../images/arrow-left1.png';
import mobileAndroid from '../../images/mobile-android-alt1.png';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper';

const AuthPage = () => {

    const navigate = useNavigate();

    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!mobileNo || !email) {
            setIsError(true);
            return;
        }

        const response = await fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mobileNo, email })
        })

        const result = await response.json();

        if (!response.ok) {
            setIsError(true);
            if (result.mssg === 'Invalid email format !') setIsValidEmail(false);
            return;
        }

        console.log(result.code);

        navigate('/verify-mobile')
    }

    return (
        <SiteWrappper>
            <Header />

            <h3 className={styles['auth-title']}>Welcome to Website</h3>

            <div className={isError ? styles['auth-card-error'] : styles['auth-card']}></div>
            <div className={styles['card-progress']}></div>
            <div className={styles['progress']}></div>

            <img src={arrowLeft} alt='arrow' className={styles['card-arrow']} />


            <h4 className={styles['card-title']}>Enter your mobile no. and email</h4>

            <img src={mobileAndroid} alt='mobile-phone' className={styles['card-phone']} />

            <p className={isError ? styles['card-terms-error'] : styles['card-terms']}>
                By signing up, I agree to the <span>Privacy Policy</span> & <span>Terms of Use</span></p>

            <form className={styles['card-form']} onSubmit={submitHandler}>

                <label className={styles['label-mobile']}>Mobile no.</label>
                <input className={(isError && !mobileNo) ? styles['input-mobile-error'] : styles['input-mobile']} placeholder='Enter your mobile no.'
                    onChange={(e) => setMobileNo(e.target.value)} value={mobileNo}></input>

                <label className={styles['label-email']}>Email Address</label>
                <input className={(isError && !email) || (!isValidEmail) ? styles['input-email-error'] : styles['input-email']} placeholder='Enter your email id'
                    onChange={(e) => setEmail(e.target.value)} value={email}></input>

                {isError && <div className={styles['alert']}>
                    <p>Please enter your mobile no. and email id</p>
                </div>}

                <button className={isError ? styles['button-error'] : styles['button']}>Continue</button>
            </form>

        </SiteWrappper>
    )
}

export default AuthPage;
import styles from './Card.module.css';
import { useState } from 'react';
import { useVerify } from '../../hooks/useVerify';

const Card = () => {

    const { verifyCode, error, setError } = useVerify();

    const [code, setCode] = useState('');

    const verifyHandler = async (e) => {
        e.preventDefault();

        if (!code || code.length < 6) {
            setError('6-digit code needed !')
            return;
        }

        await verifyCode(code);
    }

    return (
        <>
            <div className={styles['card']}></div>
            <div className={styles['card-progress']}></div>
            <div className={styles['progress']}></div>

            <form className={styles['verification-form']} onSubmit={verifyHandler}>

                {!error ?
                    <label className={styles['label-code']}>Verification code</label>
                    :
                    <label className={styles['label-code-error']}>{error}</label>
                }
                <input className={styles['input-code']} placeholder='Enter 6-digit verification code here'
                    onChange={(e) => setCode(e.target.value)} value={code} />

                <button>Continue</button>

                <p>Didn’t receive code? <span>Resend code</span></p>
                <p>OR</p>
            </form>
        </>
    )
}

export default Card;
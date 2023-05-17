import styles from './Card.module.css';

const Card = () => {
    return (
        <>
            <div className={styles['card']}></div>
            <div className={styles['card-progress']}></div>
            <div className={styles['progress']}></div>

            <form className={styles['verification-form']}>

                <label className={styles['label-code']}>Verification code</label>
                <input className={styles['input-code']} placeholder='Enter 6-digit verification code here'></input>

                <button>Continue</button>

                <p>Didn’t receive code? <span>Resend code</span></p>
                <p>OR</p>
            </form>
        </>
    )
}

export default Card;
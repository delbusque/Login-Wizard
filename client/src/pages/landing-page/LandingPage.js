import styles from './LandingPage.module.css';
import newUser from '../../images/new-user.png';
import existingUser from '../../images/existing-user.png';
import Header from '../../components/Header';


const LandingPage = () => {
    return (
        <div className={styles['landing-container']}>

            <Header />

            <h3 className={styles['landing-title']}>Welcome to Website</h3>
            <h5 className={styles['landing-desc']}>Keeping Communities Connected</h5>

            <div className={styles['new-user-container']}>
                <img src={newUser} alt='new-user' />
                <div>
                    <p>I`m new user</p>
                    <button>CREATE ACCOUNT</button>
                </div>
            </div>

            <div className={styles['existing-user-container']}>
                <img src={existingUser} alt='new-user' />
                <div>
                    <p>I have an account</p>
                    <button>LOGIN NOW</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
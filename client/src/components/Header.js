import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-logo']}>Website</div>
            <div className={styles['header-help']}>NEED HELP?</div>
        </div>
    )
}

export default Header;
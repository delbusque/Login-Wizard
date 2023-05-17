import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-logo']}>Website</div>
            <div className={styles['header-help']}>
                <div className={styles['help-text']}>NEED HELP?</div>
            </div>
        </div>

    )
}

export default Header;
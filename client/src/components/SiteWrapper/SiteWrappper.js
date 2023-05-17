import styles from './SiteWrappper.module.css';

const SiteWrappper = ({ children }) => {
    return (
        <div className={styles['site-wrapper']}>
            {children}
        </div>
    )
}
export default SiteWrappper;
import Header from '../../components/Header/Header.js';
import LogRow from '../../components/LogRow/LogRow.js';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper.js';
import styles from './LogsTable.module.css';

const LogsTable = () => {
    return (
        <SiteWrappper>
            <Header />
            <h3 className={styles['title']}>Loggs</h3>

            <div className={styles['card']}>

                <div className={styles['table-head-cont']}>
                    <div className={styles['head-owner']}>owner</div>
                    <div className={styles['head-status']}>status</div>
                    <div className={styles['head-code']}>code</div>
                    <div className={styles['head-timestamp']}>timestamp</div>
                </div>

                <LogRow />

            </div>





        </SiteWrappper>
    )
}

export default LogsTable;
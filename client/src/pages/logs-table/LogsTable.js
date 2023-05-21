import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.js';
import LogRow from '../../components/LogRow/LogRow.js';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper.js';
import styles from './LogsTable.module.css';

const LogsTable = () => {

    const [logs, setLogs] = useState([]);

    useEffect(() => {

        const loggings = () => fetch('/logs').then(res => res.json()).then(data => {
            setLogs(data.userSession.logs);
        });

        loggings();

    }, []);

    return (
        <SiteWrappper>
            <Header />
            <h3 className={styles['title']}>Logs</h3>

            <div className={styles['card']}>

                <div className={styles['table-head-cont']}>
                    <div className={styles['head-owner']}>user</div>
                    <div className={styles['head-status']}>status</div>
                    <div className={styles['head-code']}>code</div>
                    <div className={styles['head-timestamp']}>timestamp</div>
                </div>

                {logs && logs.map(log => <LogRow key={log.timestamp}
                    log={log} logs={logs} setLogs={setLogs} />)}
            </div>
        </SiteWrappper>
    )
}

export default LogsTable;
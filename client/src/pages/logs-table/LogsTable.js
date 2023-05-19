import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.js';
import LogRow from '../../components/LogRow/LogRow.js';
import SiteWrappper from '../../components/SiteWrapper/SiteWrappper.js';
import styles from './LogsTable.module.css';

const LogsTable = () => {

    const [session, setSession] = useState([]);

    const fetchSession = async () => {
        const response = await fetch('/logs');
        const result = await response.json();
        setSession(result.userSession.logs);
    }

    useEffect(() => {
        fetchSession();
    }, [])

    return (
        <SiteWrappper>
            <Header />
            <h3 className={styles['title']}>Loggs</h3>

            <div className={styles['card']}>

                <div className={styles['table-head-cont']}>
                    <div className={styles['head-owner']}>user</div>
                    <div className={styles['head-status']}>status</div>
                    <div className={styles['head-code']}>code</div>
                    <div className={styles['head-timestamp']}>timestamp</div>
                </div>

                {session && session.map(log => <LogRow key={log.timestamp} log={log} />)}
            </div>





        </SiteWrappper>
    )
}

export default LogsTable;
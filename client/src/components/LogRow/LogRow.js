import styles from './LogRow.module.css';

const LogRow = ({ log, logs, setLogs }) => {

    const deleteHandler = () => {
        const newLogs = logs.filter(l => l.id !== log.id);
        setLogs(newLogs)
        fetch('/logs', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ logId: log.id })
        })
    }


    return (
        <div className={styles['table-row-cont']}>

            <div className={styles['row-owner']}>{log.email}</div>

            {log.status === 'success' ?
                <div className={styles['row-status']}>{log.status}</div> :
                <div className={styles['row-status-error']}>{log.status}</div>
            }

            <div className={styles['row-code']}>{log.userCode}</div>
            <div className={styles['row-timestamp']}>{log.timestamp}</div>
            <div className={styles['row-buttons']}>
                <span className={styles['row-pencil']}><i className="fa-solid fa-pencil"></i></span>
                <span className={styles['row-trash']} onClick={deleteHandler}><i className="fa-solid fa-trash"></i></span>
            </div>

        </div>
    )
}

export default LogRow;
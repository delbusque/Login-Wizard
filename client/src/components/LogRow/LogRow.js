import styles from './LogRow.module.css';
import { useState, useEffect } from 'react';
import validator from 'validator';

const LogRow = ({ log, logs, setLogs }) => {

    const [onEdit, setOnEdit] = useState(false);
    const [editedEmail, setEditedEmail] = useState('');
    const [editedStatus, setEditedStatus] = useState('');
    const [error, setError] = useState('');


    const editHandler = () => {
        setEditedEmail(log.email);
        setEditedStatus(log.status);
        if (!onEdit) setOnEdit(true);
        if (onEdit) setOnEdit(false);
    }

    const saveEditHandler = () => {

        if (!validator.isEmail(editedEmail)) {
            return setError('Please, provide valid email !')
        }

        fetch('/edit-log', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: editedEmail, status: editedStatus, logId: log.id, log })
        }).then(() => {
            if (!onEdit) setOnEdit(true);
            if (onEdit) setOnEdit(false);
            log.email = editedEmail;
            log.status = editedStatus;
            setError('');
        })

    }

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
        <>
            {error && <div className={styles['table-row-error']}>{error}</div>}

            <div className={styles['table-row-cont']}>

                {!onEdit ?
                    <div className={styles['row-owner']}>{log.email}</div> :

                    <input className={styles['row-owner-edit']}
                        value={editedEmail}
                        onChange={(e) => setEditedEmail(e.target.value)}
                        onBlur={(e) => setOnEdit(true)}
                    />
                }

                {!onEdit ?
                    <div className={styles['row-status']}>{log.status}</div> :
                    <input className={styles['row-status-edit']}
                        value={editedStatus}
                        onChange={(e) => setEditedStatus(e.target.value)}
                        onBlur={(e) => setOnEdit(true)}
                    />
                }

                <div className={styles['row-code']}>{log.userCode}</div>

                <div className={styles['row-timestamp']}>{log.timestamp}</div>


                <div className={styles['row-buttons']}>

                    {!onEdit && <>
                        <span className={styles['row-pencil']} onClick={editHandler}><i className="fa-solid fa-pencil"></i></span>
                        <span className={styles['row-trash']} onClick={deleteHandler}><i className="fa-solid fa-trash"></i></span></>
                    }

                    {onEdit && <span className={styles['row-save']} onClick={saveEditHandler}><i className="fa-solid fa-floppy-disk"></i></span>}


                </div>
            </div>
        </>
    )
}

export default LogRow;
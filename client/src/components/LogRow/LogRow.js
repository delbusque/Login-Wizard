import styles from './LogRow.module.css';
import { useState } from 'react';
import validator from 'validator';

const LogRow = ({ log, logs, setLogs }) => {

    const [onEdit, setOnEdit] = useState(false);
    const [onDelete, setOnDelete] = useState(false);
    const [editedEmail, setEditedEmail] = useState('');
    const [editedStatus, setEditedStatus] = useState('');
    const [error, setError] = useState('');


    const editHandler = () => {
        setEditedEmail(log.email);
        setEditedStatus(log.status);
        if (!onEdit) setOnEdit(true);
        if (onEdit) setOnEdit(false);
    }

    const cancelEdit = () => {
        if (onEdit) setOnEdit(false);
        if (!onEdit) setOnEdit(true);
    }

    const saveEdit = () => {

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
        if (!onDelete) setOnDelete(true);
        if (onDelete) setOnDelete(false);
    }

    const cancelDelete = () => {
        if (onDelete) setOnDelete(false);
        if (!onDelete) setOnDelete(true);
    }

    const confirmDelete = () => {
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
                    />
                }

                {!onEdit ?
                    <div className={styles['row-status']}>{log.status}</div> :
                    <input className={styles['row-status-edit']}
                        value={editedStatus}
                        onChange={(e) => setEditedStatus(e.target.value)}
                        maxlength="7"
                    />
                }

                <div className={styles['row-code']}>{log.userCode}</div>

                <div className={styles['row-timestamp']}>{log.timestamp}</div>

                <div className={styles['row-buttons']}>

                    {(!onEdit && !onDelete) && <>
                        <span className={styles['row-pencil']} onClick={editHandler}><i className="fa-solid fa-pencil"></i></span>
                        <span className={styles['row-trash']} onClick={deleteHandler}><i className="fa-solid fa-trash"></i></span></>
                    }

                    {onEdit && <>
                        <span className={styles['row-pencil']} onClick={cancelEdit}><i className="fa-solid fa-xmark"></i></span>
                        <span className={styles['row-save']} onClick={saveEdit}><i className="fa-solid fa-floppy-disk"></i></span>
                    </>
                    }


                    {onDelete && <>
                        <span className={styles['row-pencil']} onClick={cancelDelete}><i className="fa-solid fa-xmark"></i></span>
                        <span className={styles['row-trash']} onClick={confirmDelete}><i className="fa-solid fa-trash-arrow-up"></i></span>
                    </>
                    }

                </div>
            </div>
        </>
    )
}

export default LogRow;
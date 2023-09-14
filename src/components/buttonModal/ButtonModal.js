import React,{ useState,useEffect,forwardRef } from 'react'
import styles from './ButtonModal.module.css'

const ButtonModal = ({ id,closeModal,handleBook,handleReserve,handleDisable,handleFlash,status }) => {

    // const [show, setShow] = useState(false)
    return (
        <div className={styles.modal} id='modal'>
            <h2>Table {id}</h2>
            <div className={styles.actions}>
                <button className={status[id].booked ? styles.buttonB : styles.button} id='book' onClick={() => handleBook(id)}>
                    {status[id].booked ? 'Close' : 'Book'}
                </button>
                <button className={styles.button} id='flash' onClick={() => handleFlash(id)}>
                    Flash
                </button>
                <button className={status[id].reserved ? styles.buttonB : styles.button} id='reserve' onClick={() => handleReserve(id)}>
                    Reserve
                </button>
                <button className={status[id].disabled ? styles.buttonB : styles.button} id='disable' onClick={() => handleDisable(id)}>
                    Disable
                </button>
            </div>
        </div >
    )
}

export default ButtonModal
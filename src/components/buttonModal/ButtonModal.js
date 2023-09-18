import React,{ useState,useEffect,forwardRef } from 'react'
import styles from './ButtonModal.module.css'

const ButtonModal = ({ id,closeModal,handleBook,handleReserve,handleDisable,handleFlash,status }) => {
    const timers = status.find(timer => timer.id === id)
    // const [show, setShow] = useState(false)
    return (
        <div className={styles.modal} id='modal'>
            <h2>Table {id}</h2>
            <div className={styles.actions}>
                <button className={timers.booked ? styles.buttonB : styles.button} id='book' onClick={() => handleBook(id)}>
                    {timers.booked ? 'Close' : 'Book'}
                </button>
                <button className={styles.button} id='flash' onClick={() => handleFlash(id)}>
                    Flash
                </button>
                <button className={timers.reserved ? styles.buttonB : styles.button} id='reserve' onClick={() => handleReserve(id)}>
                    Reserve
                </button>
                <button className={timers.disabled ? styles.buttonB : styles.button} id='disable' onClick={() => handleDisable(id)}>
                    Disable
                </button>
            </div>
        </div >
    )
}

export default ButtonModal
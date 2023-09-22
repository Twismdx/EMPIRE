import React,{ useState,useEffect,forwardRef } from 'react'
import styles from './ButtonModal.module.css'

const ButtonModal = ({ id,closeModal,handleBook,handleReserve,handleDisable,handleFlash,status }) => {
    const timers = status.find(timer => timer.id === id)

    useEffect(() => {
        let timeoutId

        const closeModalAfterTimeout = () => {
            timeoutId = setTimeout(() => {
                closeModal()
            },5000)
        }

        const resetTimeout = () => {
            clearTimeout(timeoutId)
            closeModalAfterTimeout()
        }

        closeModalAfterTimeout()

        // Event listeners to reset timeout on interaction
        const modalElement = document.getElementById('modal')
        modalElement.addEventListener('click',resetTimeout)
        modalElement.addEventListener('keydown',resetTimeout)

        return () => {
            clearTimeout(timeoutId)
            modalElement.removeEventListener('click',resetTimeout)
            modalElement.removeEventListener('keydown',resetTimeout)
        }
    },[closeModal,id])

    return (
        <div className={styles.modal} id='modal'>
            <h2>Table {id}</h2>
            <div className={styles.actions}>
                <button className={timers.booked ? styles.buttonB : styles.button} disabled={timers.reserved || timers.disabled} id='book' style={timers.reserved || timers.disabled ? { backgroundColor: 'grey' } : null} onClick={() => handleBook(id)}>
                    {timers.booked ? 'Close' : 'Book'}
                </button>
                <button className={styles.button} id='flash' onClick={() => handleFlash(id)}>
                    Flash
                </button>
                <button className={timers.reserved ? styles.buttonB : styles.button} style={timers.booked ? { backgroundColor: 'grey' } : null} disabled={timers.booked} id='reserve' onClick={() => handleReserve(id)}>
                    Reserve
                </button>
                <button className={timers.disabled ? styles.buttonB : styles.button} style={timers.booked ? { backgroundColor: 'grey' } : null} disabled={timers.booked} id='disable' onClick={() => handleDisable(id)}>
                    Disable
                </button>
            </div>
        </div >
    )
}

export default ButtonModal
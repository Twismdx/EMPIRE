import React,{ useState } from 'react'
import styles from './Card.module.css'
import blue from './blue.png'
import green from './green.png'

const Card = ({ id,show,status,imageUrl,rotation }) => {
    const [isRunning,setIsRunning] = useState(false)
    const [seconds,setSeconds] = useState(0)
    const [amount,setAmount] = useState(0)
    const [prepaid,setPrepaid] = useState(0)

    // Logic to determine the appropriate image path based on props
    const imagePath = imageUrl === 'blue' ? blue : green
    // Apply rotation style based on rotation prop
    const rotationStyle = rotation === '90' ? { transform: 'rotate(90deg)' } : {}
    // Apply CSS class based on grayscale prop
    const imageStyle =
        status[id].booked ? { filter: 'grayscale(100%)' } :
            status[id].reserved ? { filter: 'grayscale(100%)' } :
                status[id].disabled ? { filter: 'grayscale(100%)' } :
                    { filter: 'grayscale(0%)' }

    const Disable = () => {
        return (
            <div className={styles.xText}>
                X
            </div>
        )
    }

    const Reserve = () => {
        return (
            <div className={rotation === '90' ? styles.rrText : styles.rText}>
                RESERVED
            </div>
        )
    }

    const TableNo = () => {
        return (
            <div className={styles.tText}>
                {id}
            </div>
        )
    }

    return (
        <div className='div' >
            <img src={imagePath} alt="Image" style={{ ...imageStyle,...rotationStyle }} />
            {
                status[id].reserved ? <Reserve /> :
                    status[id].disabled ? <Disable /> :
                        <TableNo />
            }
        </div>
    )
}

export default Card

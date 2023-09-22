import React,{ useState,useEffect } from 'react'
import { useGlobalContext } from './Context'
import styles from '../App'

const Counter = ({ secs,paid,prepaid,id,booked,disabled,reserved,setStatus }) => {
	const { hourlyRate,status } = useGlobalContext()
	const [seconds,setSeconds] = useState(secs)
	const [amount,setAmount] = useState(paid)
	const [prepaidAmount,setPrepaidAmount] = useState(prepaid)


	useEffect(() => {
		let interval
		if (booked) {
			interval = setInterval(() => {
				setStatus((prevStatus) => {
					const updatedStatus = prevStatus.map((statusItem) => {
						if (statusItem.id === id) {
							if (statusItem.prepaidAmount > 0) {
								if (statusItem.seconds === 0) {
									return {
										...statusItem,
										prepaidAmount: 0,
										seconds: 0,
									}
								} else {
									return {
										...statusItem,
										seconds: statusItem.seconds - 1,
										amount: statusItem.amount - hourlyRate / 3600,
									}
								}
							} else {
								return {
									...statusItem,
									seconds: statusItem.seconds + 1,
									amount: statusItem.amount + hourlyRate / 3600,
								}
							}
						}
						return statusItem
					})
					return updatedStatus
				})
			},1000)
		} else {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	},[booked,id,hourlyRate,setStatus])

	const formatTime = (time) => {
		const hours = Math.floor(time / 3600)
		const minutes = Math.floor((time % 3600) / 60)
		const seconds = time % 60
		const formattedHours = hours.toString().padStart(2,'0')
		const formattedMinutes = minutes.toString().padStart(2,'0')
		const formattedSeconds = seconds.toString().padStart(2,'0')
		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
	}
	const timer = status.find((timers) => timers.id === id)
	const textColor = timer.prepaidAmount > 0 ? '#880808' : 'black'


	return (
		<div>
			<span className={styles.timer}>{booked ? formatTime(seconds) : null}</span>
			<span className={styles.timer}>
				&nbsp;&nbsp;&nbsp;&nbsp;
				{booked ? (prepaidAmount > 0
					? `- $${amount.toFixed(2)}`
					: ` $${amount.toFixed(2)}`)
					: null}

			</span>
		</div>
	)
}

export default Counter
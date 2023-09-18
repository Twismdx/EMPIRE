import React,{ useState,useEffect } from 'react'
import { useGlobalContext } from './Context'

const Counter = ({ secs,paid,prepaid,id,booked,disabled,reserved,setStatus }) => {
	const { hourlyRate } = useGlobalContext()
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

	useEffect(() => {
		if (prepaidAmount > 0) {
			const prepaidTime = (prepaidAmount / hourlyRate) * 3600
			setSeconds(prepaidTime)
			setAmount(prepaidAmount)
		}
	},[prepaidAmount,hourlyRate])

	const textColor = amount < 0 ? 'red' : 'black'


	return (
		<div>
			<span style={{ color: textColor }}>{formatTime(seconds)}</span>

			<span style={{ color: textColor }}>
				&nbsp;&nbsp;&nbsp;&nbsp;
				{prepaidAmount > 0
					? `- $${amount.toFixed(2)}`
					: `$${amount.toFixed(2)}`}
			</span>
		</div>
	)
}

export default Counter
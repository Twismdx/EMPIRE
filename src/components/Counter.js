import React,{ useState,useEffect } from 'react'
import { useGlobalContext } from './Context'

const Counter = ({ secs,paid,prepaid,id,status,setStatus }) => {
	const { hourlyRate } = useGlobalContext()
	const [seconds,setSeconds] = useState(status.counter.seconds)
	const [amount,setAmount] = useState(status.counter.paid)
	const [prepaidAmount,setPrepaidAmount] = useState(status.counter.prepaid)

	useEffect(() => {
		let interval

		if (status.booked) {
			interval = setInterval(() => {
				if (prepaidAmount > 0) {
					setSeconds((prevSeconds) => {
						if (prevSeconds === 0) {
							setPrepaidAmount(0) // Reset prepaidAmount to 0 when seconds reach 0
							return 0 // Reset seconds to 0
						}
						return prevSeconds - 1
					})
					setAmount((prevAmount) => prevAmount - hourlyRate / 3600)
				} else {
					setSeconds((prevSeconds) => prevSeconds + 1)
					setAmount((prevAmount) => prevAmount + hourlyRate / 3600)
				}
			},1000)
		} else {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	},[status.booked,prepaidAmount,hourlyRate])


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

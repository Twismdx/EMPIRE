import React,{ useContext,useState,useEffect,useRef } from 'react'
import moment from 'moment'
const Context = React.createContext()

const ContextProvider = ({ children }) => {
	const [dayRate,setDayRate] = useState(18)
	const [nightRate,setNightRate] = useState(20)
	const [satRate,setSatRate] = useState(22)
	const [vipRate,setVipRate] = useState(15)
	const [hourlyRate,setHourlyRate] = useState({ 'Day Rate': dayRate })
	const currentTime = moment().utcOffset('+9:30').format('hh:mm:ss a')
	const currentDay = moment().utcOffset('+9:30').format('ddd')
	const [time,setTime] = useState(currentTime)
	const [day,setDay] = useState(currentDay)
	const [selected,setSelected] = useState(null)
	const [total,setTotal] = useState(0)
	const [outstanding,setOutstanding] = useState(0)
	const onChange = (e) => {
		setSelected(e.target.value)
		console.log(e.target.value)
	}

	const [timers,setTimers] = useState([
		{ id: 1,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 2,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 3,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 4,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 5,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 6,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 7,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 8,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 9,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 10,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 11,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 12,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 13,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 14,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 16,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 17,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 18,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 19,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 20,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 21,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 22,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 23,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 24,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 25,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 26,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 27,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 28,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 29,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 30,secs: 0,paid: 0,prepaid: 0,start: false },
		{ id: 31,secs: 0,paid: 0,prepaid: 0,start: false },
	])

	useEffect(() => {
		setTime(currentTime)
		setDay(currentDay)

		const timestamp = moment(time,'hh:mm:ss a').valueOf()
		const startOfDayTimestamp = moment(
			'08:00:00 am',
			'hh:mm:ss a'
		).valueOf()
		const endOfDayTimestamp = moment('07:29:59 pm','hh:mm:ss a').valueOf()
		const startOfNightTimestamp = moment(
			'07:30:00 pm',
			'hh:mm:ss a'
		).valueOf()
		const endOfNightTimestamp = moment(
			'07:59:59 am',
			'hh:mm:ss a'
		).valueOf()

		if (timestamp > startOfDayTimestamp && timestamp < endOfDayTimestamp) {
			setHourlyRate(dayRate)
		} else if (
			day !== 'Sunday' &&
			day !== 'Thursday' &&
			timestamp > startOfNightTimestamp &&
			timestamp < endOfNightTimestamp
		) {
			setHourlyRate(nightRate)
		} else if (
			day === 'Friday' &&
			day === 'Saturday' &&
			timestamp > startOfNightTimestamp &&
			timestamp < endOfNightTimestamp
		) {
			setHourlyRate(satRate)
		} else {
			setHourlyRate(dayRate)
		}
	},[currentTime,currentDay])

	return (
		<Context.Provider
			value={{
				dayRate,
				setDayRate,
				nightRate,
				setNightRate,
				satRate,
				setSatRate,
				vipRate,
				setVipRate,
				time,
				setTime,
				day,
				setDay,
				hourlyRate,
				setHourlyRate,
				timers,
				setTimers,
				selected,
				setSelected,
				onChange,
				total,
				setTotal,
				outstanding,
				setOutstanding
			}}
		>
			{children}
		</Context.Provider>
	)
}

const useGlobalContext = () => {
	return useContext(Context)
}

export { ContextProvider,useGlobalContext }

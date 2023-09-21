import React,{ useContext,useState,useEffect,useRef } from 'react'
import moment from 'moment'
const Context = React.createContext()

const ContextProvider = ({ children }) => {
	const [dayRate,setDayRate] = useState(18)
	const [nightRate,setNightRate] = useState(20)
	const [satRate,setSatRate] = useState(22)
	const [vipRate,setVipRate] = useState(15)
	const [hourlyRate,setHourlyRate] = useState(dayRate)
	const currentTime = moment().format('hh:mm:ss a')
	const currentDay = moment().format('ddd')
	const time = moment().format('ddd hh:mm:ss a')
	const [day,setDay] = useState(currentDay)
	const [selected,setSelected] = useState(null)
	const [total,setTotal] = useState(0)
	const [outstanding,setOutstanding] = useState(0)
	const onChange = (e) => {
		setSelected(e.target.value)
		console.log(e.target.value)
	}
	const [status,setStatus] = useState(() => {
		const initialState = [
			{ id: 1,seconds: 0,amount: 0,prepaidAmount: 18,booked: false,reserved: false,disabled: false },
			{ id: 2,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 3,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 4,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 5,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 6,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 7,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 8,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 9,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 10,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 11,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 12,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 13,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 14,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 16,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 17,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 18,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 19,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 20,seconds: 0,amount: 0,prepaidAmount: 50,booked: false,reserved: false,disabled: false },
			{ id: 21,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 22,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 23,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 24,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 25,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 26,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 27,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 28,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 29,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 30,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
			{ id: 31,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
		]
		return initialState
	})

	useEffect(() => {
		if (
			(currentDay === 'Sun' || currentDay === 'Mon' || currentDay === 'Tue' || currentDay === 'Wed' || currentDay === 'Thu' || currentDay === 'Fri' || currentDay === 'Sat') &&
			moment(currentTime,'hh:mm:ss a').isBetween(moment('07:00:00 am','hh:mm:ss a'),moment('07:00:00 am','hh:mm:ss a').add(12,'hours'))
		) {
			setHourlyRate(dayRate)
		} else if (
			(currentDay === 'Sun' || currentDay === 'Mon' || currentDay === 'Tue' || currentDay === 'Wed' || currentDay === 'Thu') &&
			moment(currentTime,'hh:mm:ss a').isBetween(moment('07:00:00 pm','hh:mm:ss a'),moment('07:00:00 pm','hh:mm:ss a').add(12,'hours'))
		) {
			setHourlyRate(nightRate)
		} else if (
			(currentDay === 'Fri' || currentDay === 'Sat') &&
			moment(currentTime,'hh:mm:ss a').isBetween(moment('07:00:00 pm','hh:mm:ss a'),moment('07:00:00 pm','hh:mm:ss a').add(12,'hours'))
		) {
			setHourlyRate(satRate)
		}
	},[currentDay,currentTime])

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
				day,
				setDay,
				hourlyRate,
				setHourlyRate,
				selected,
				setSelected,
				onChange,
				total,
				setTotal,
				outstanding,
				setOutstanding,
				status,
				setStatus
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

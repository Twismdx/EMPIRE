import React from 'react'
import { useCallback,useState,useEffect } from 'react'
import Card from '../components/Card'
import styles from './FrameComponent1.module.css'
import { useGlobalContext } from '../components/Context'
import TableContainerComponent from '../components/TableContainerComponent'
import PortalPopup from '../components/PortalPopup'
import ButtonModal from '../components/buttonModal/ButtonModal'
import Modal from '../components/Modal'
import * as fetch from '../components/utils/requests'

const FrameComponent1 = (props) => {
	const { selected,setSelected,onChange,total,setTotal,outstanding,setOutstanding,status,setStatus,time } = useGlobalContext()
	const [activeId,setActiveId] = useState(null)
	const [isFramePopupOpen,setFramePopupOpen] = useState(false)
	const [isButtonModalOpen,setButtonModalOpen] = useState(false)

	function toggle(id,param) {
		setStatus((prevStatus) => {
			const updatedStatus = prevStatus.map((timer) => {
				if (timer.id === id) {
					return {
						...timer,
						[param]: !timer[param],
					}
				}
				return timer
			})
			return updatedStatus
		})
	}

	function book(id) {
		setStatus((prevStatus) => {
			const updatedStatus = prevStatus.map((timer) => {
				if (timer.id === id) {
					return {
						...timer,
						booked: true,
					}
				}
				return timer
			})
			return updatedStatus
		})
	}

	function close(id) {
		setStatus((prevStatus) => {
			const updatedStatus = prevStatus.map((timer) => {
				if (timer.id === id) {
					const amountToAdd = timer.amount // Get the amount to add
					setTotal(prevTotal => prevTotal + amountToAdd)
					const amountToRemove = timer.amount // Get the amount to remove
					setTotal(prevTotal => prevTotal - amountToRemove)
					return {
						...timer,
						booked: false,
						seconds: 0,
						amount: 0,
						prepaidAmount: 0,
					}
				}
				return timer
			})
			return updatedStatus
		})
	}

	const openButtonModal = useCallback((id) => {
		setActiveId(id)
		setButtonModalOpen(true)
	},[])

	const closeButtonModal = useCallback(() => {
		setButtonModalOpen(false)
		setActiveId(null)
	},[])

	const openFramePopup = useCallback(() => {
		setFramePopupOpen(true)
	},[])

	const closeFramePopup = useCallback(() => {
		setFramePopupOpen(false)
	},[])

	const handleFlash = async (id) => {
		fetch.flash(id)
	}

	const handleBook = (id) => {
		const timer = status.find((timers) => timers.id == id)
		if (timer.booked) {
			close(id)
			fetch.lightOff(id)
		} else {
			fetch.lightOn(id)
			book(id)
		}
	}

	const handleReserve = (id) => {
		toggle(id,'reserved')
	}

	const handleDisable = (id) => {
		toggle(id,'disabled')
	}

	useEffect(() => {
		const getTotalPaid = () => {
			const sum = status.reduce((total,item) => {
				return total + item.prepaidAmount
			},0)
			return sum
		}
		const getTotalOutstanding = () => {
			const sum = status.reduce((total,item) => {
				return total + item.amount
			},0)
			return sum
		}
		const updateTotalPaid = () => {
			const totalPaid = getTotalPaid()
			setTotal(totalPaid.toFixed(2))
		}
		const updateTotalOutstanding = () => {
			const totalOutstanding = getTotalOutstanding()
			setOutstanding(totalOutstanding.toFixed(2))
		}
		updateTotalPaid()
		updateTotalOutstanding()
	},[status])

	return (
		<>
			<div className={styles.parent}>
				<div classname={styles.parent2}>
					<div className={styles.t1} id='1' onClick={() => openButtonModal(1)}>
						<Card
							id='1'
							status={status}
							imageUrl='blue'
						/>
					</div>
					<div className={styles.t2} id='2' onClick={() => openButtonModal(2)}>
						<Card
							id='2'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t3} id='3' onClick={() => openButtonModal(3)}>
						<Card
							id='3'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t4} id='4' onClick={() => openButtonModal(4)}>
						<Card
							id='4'
							status={status}
							imageUrl='blue'
						/>
					</div>
					<div className={styles.t5} id='5' onClick={() => openButtonModal(5)}>
						<Card
							id='5'
							status={status}
							imageUrl='blue'
						/>
					</div>
					<div className={styles.t6} id='6' onClick={() => openButtonModal(6)}>
						<Card
							id='6'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t7} id='7' onClick={() => openButtonModal(7)}>
						<Card
							id='7'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t8} id='8' onClick={() => openButtonModal(8)}>
						<Card
							id='8'
							status={status}
							imageUrl='blue'
						/>
					</div>
					<div className={styles.t9} id='9' onClick={() => openButtonModal(9)}>
						<Card
							id='9'
							status={status}
							imageUrl='blue'
						/>
					</div>
					<div className={styles.t10} id='10' onClick={() => openButtonModal(10)}>
						<Card
							id='10'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t11} id='11' onClick={() => openButtonModal(11)}>
						<Card
							id='11'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t12} id='12' onClick={() => openButtonModal(12)}>
						<Card
							id='12'
							status={status}
							imageUrl='blue'
						/>
					</div>
					<div className={styles.t13} id='13' onClick={() => openButtonModal(13)}>
						<Card
							id='13'
							status={status}
							imageUrl='blue'
						/>
					</div>
					<div className={styles.t14} id='14' onClick={() => openButtonModal(14)}>
						<Card
							id='14'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t16} id='16' onClick={() => openButtonModal(16)}>
						<Card
							id='16'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t17} id='17' onClick={() => openButtonModal(17)}>
						<Card
							id='17'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t18} id='18' onClick={() => openButtonModal(18)}>
						<Card
							id='18'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t19} id='19' onClick={() => openButtonModal(19)}>
						<Card
							id='19'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t20} id='20' onClick={() => openButtonModal(20)}>
						<Card
							id='20'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t21} id='21' onClick={() => openButtonModal(21)}>
						<Card
							id='21'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t22} id='22' onClick={() => openButtonModal(22)}>
						<Card
							id='22'
							status={status}
							imageUrl='green'
						/>
					</div>
					<div className={styles.t23} id='23' onClick={() => openButtonModal(23)}>
						<Card
							id='23'
							status={status}
							imageUrl='green'
						/>
					</div>
					<div className={styles.t24} id='24' onClick={() => openButtonModal(24)}>
						<Card
							id='24'
							status={status}
							imageUrl='green'
						/>
					</div>
					<div className={styles.t25} id='25' onClick={() => openButtonModal(25)}>
						<Card
							id='25'
							status={status}
							imageUrl='green'
						/>
					</div>
					<div className={styles.t26} id='26' onClick={() => openButtonModal(26)}>
						<Card
							id='26'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t27} id='27' onClick={() => openButtonModal(27)}>
						<Card
							id='27'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t28} id='28' onClick={() => openButtonModal(28)}>
						<Card
							id='28'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t29} id='29' onClick={() => openButtonModal(29)}>
						<Card
							id='29'
							status={status}
							imageUrl='green'
							rotation='90'
						/>
					</div>
					<div className={styles.t30} id='30' onClick={() => openButtonModal(30)}>
						<Card
							id='30'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
					<div className={styles.t31} id='31' onClick={() => openButtonModal(31)}>
						<Card
							id='31'
							status={status}
							imageUrl='blue'
							rotation='90'
						/>
					</div>
				</div>
				<div className={styles.stats}>
					<div className={styles.outstandingContainer}>
						<b className={styles.dueTop}>Outstanding</b>
						<b className={styles.dueBot}>${outstanding}</b>
						<b className={styles.paidTop}>Total Paid</b>
						<b className={styles.paidBot}>${total}</b>
					</div>
				</div>
				<div
					className={styles.time}
				>{time}
				</div>
				<div className={styles.buttonContainer}>
					<button
						className={styles.mainButtons}
						onClick={() => fetch.allOn()}
					>
						All On
					</button>
					<button
						className={styles.mainButtons}
						onClick={() => fetch.allOff()}
					>
						All Off
					</button>
					<button
						className={styles.mainButtons}
						onClick={() => openFramePopup()}
					>
						Settings
					</button>
				</div>
				<TableContainerComponent
					id={activeId}
				/>
			</div>
			{isFramePopupOpen && (
				<PortalPopup
					overlayColor='rgba(113, 113, 113, 0.3)'
					placement='Centered'
					onOutsideClick={closeFramePopup}
				>
					<Modal onClose={closeFramePopup} />
				</PortalPopup>
			)}
			{isButtonModalOpen && (
				<PortalPopup
					placement='Centered'
					onOutsideClick={closeButtonModal}
				>
					<ButtonModal
						onClose={closeButtonModal}
						handleBook={handleBook}
						handleDisable={handleDisable}
						handleReserve={handleReserve}
						handleFlash={handleFlash}
						id={activeId}
						status={status}
						closeModal={closeButtonModal}
					/>
				</PortalPopup>
			)}
		</>
	)
}

export default FrameComponent1

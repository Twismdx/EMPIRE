import React from 'react'
import { useCallback,useState,useEffect } from 'react'
import Card from '../components/Card'
import styles from './FrameComponent1.module.css'
import { useGlobalContext } from '../components/Context'
import TableContainerComponent from '../components/TableContainerComponent'
import PortalPopup from '../components/PortalPopup'
import ButtonModal from '../components/buttonModal/ButtonModal'
import Modal from '../components/Modal'
import { UseFetch } from '../components/UseFetch'

const FrameComponent1 = (props) => {
	const { selected,setSelected,onChange } = useGlobalContext()
	const [activeId,setActiveId] = useState(null)
	const [isFramePopupOpen,setFramePopupOpen] = useState(false)
	const [isButtonModalOpen,setButtonModalOpen] = useState(false)
	const [total,setTotal] = useState(0)
	const [outstanding,setOutstanding] = useState(0)

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

	const [status,setStatus] = useState(() => {
		const initialStatus = {
			1: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			2: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 20,
					paid: 0,
				}
			},
			3: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			4: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			5: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			6: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			7: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			8: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			9: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			10: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			11: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			12: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			13: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			14: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			16: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			17: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			18: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			19: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			20: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			21: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			22: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			23: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			24: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			25: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			26: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 50,
				}
			},
			27: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 100,
				}
			},
			28: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			29: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			30: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
			31: {
				booked: false,
				reserved: false,
				disabled: false,
				counter: {
					seconds: 0,
					prepaid: 0,
					paid: 0,
				}
			},
		}
		return initialStatus
	})

	const handleBook = (id) => {
		setStatus((prevStatus) => {
			if (prevStatus.hasOwnProperty(id)) {
				return {
					...prevStatus,
					[id]: {
						...prevStatus[id],
						booked: !prevStatus[id].booked
					}
				}
			}
			return prevStatus
		})
	}

	const handleReserve = (id) => {
		setStatus((prevStatus) => {
			if (prevStatus.hasOwnProperty(id)) {
				return {
					...prevStatus,
					[id]: {
						...prevStatus[id],
						reserved: !prevStatus[id].reserved
					}
				}
			}
			return prevStatus
		})
	}
	const handleDisable = (id) => {
		setStatus((prevStatus) => {
			if (prevStatus.hasOwnProperty(id)) {
				return {
					...prevStatus,
					[id]: {
						...prevStatus[id],
						disabled: !prevStatus[id].disabled
					}
				}
			}
			return prevStatus
		})
	}
	const handleFlash = (activeId,flash) => {
		onFetch(activeId,flash)
	}

	function getTotalPaid(status) {
		let total = 0

		Object.values(status).forEach(counter => {
			total += parseInt(counter.counter.prepaid)
			total += parseInt(counter.counter.paid)
		})
		return total
	}

	function getTotalOutstanding(status) {
		let total = 0

		Object.values(status).forEach(counter => {
			total += parseInt(counter.counter.paid)
		})
		return total
	}

	useEffect(() => {
		const outstanding = getTotalOutstanding(status)
		setOutstanding(outstanding)
		const paid = getTotalPaid(status)
		setTotal(paid)
	},[status])

	return (
		<>
			<div className={styles.parent}>
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
				<div className={styles.stats}>
					<b className={styles.due}>Due $ {outstanding}</b>
					<b className={styles.paid}>Paid $ {total}</b>
				</div>
			</div>
			<div
				className={styles.frameParent}
				id='settings'
			>
			</div>
			<TableContainerComponent
				status={status}
				setStatus={setStatus}
				id={activeId}
			/>
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

					/>
				</PortalPopup>
			)}
		</>
	)
}

export default FrameComponent1

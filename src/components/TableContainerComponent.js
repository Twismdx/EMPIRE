import React,{ useState,useEffect,useCallback,useRef } from 'react'
import styles from './TableContainerComponent.module.css'
import { useGlobalContext } from './Context'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/system'
import Counter from './Counter'

const TableContainerComponent = ({
	handleReserve,
	handleDisable,
	handleBook,
	handleClose,
	handleFlash,
	id,
}) => {
	const {
		hourlyRate,
		dayRate,
		nightRate,
		satRate,
		total,
		setTotal,
		outstanding,
		setOutstanding,
		status,
		setStatus,
	} = useGlobalContext()

	useEffect(() => {
		setStatus((prevStatus) => {
			const updatedStatus = prevStatus.map((statusItem) => {
				if (statusItem.id === id) {
					if (statusItem.prepaidAmount > 0) {
						const prepaidTime = (statusItem.prepaidAmount / hourlyRate) * 3600
						return {
							...statusItem,
							seconds: prepaidTime,
							amount: statusItem.prepaidAmount, // Fix: Access statusItem.prepaidAmount instead of status.prepaidAmount
						}
					}
				}
				return statusItem
			})
			return updatedStatus
		})
	},[setStatus,hourlyRate,status.prepaidAmount,id])


	// const index1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16]
	// const index2 = [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

	const index1 = status.slice(0,15)
	const index2 = status.slice(15)

	const getRateLabel = (rate) => {
		if (hourlyRate === dayRate) {
			return 'Day'
		} else if (hourlyRate === nightRate) {
			return 'Night'
		} else if (hourlyRate === satRate) {
			return 'Fri/Sat'
		} else {
			return 'VIP'
		}
	}

	const TableRowStyledBlue = styled(TableRow)`
		&:nth-of-type(odd) {
			background-color: #0078c6;
			padding-bottom: 1px;
			padding-top: 1px;
			margin-bottom: 0;
		}
		&:nth-of-type(even) {
			background-color: #0078c6;
			padding-bottom: 1px;
			padding-top: 1px;
			margin-bottom: 0;
		}
		& > td {
			padding-bottom: 4px;
			padding-top: 4px;
			font-weight: bold;
			text-align: left;
			
			-webkit-text-stroke: 0.5px black;
			color: white;
			text-shadow:
				2px 2px 0 #000,
				-1px -1px 0 #000,
				1px -1px 0 #000,
				-1px 1px 0 #000,
				1px 1px 0 #000;
			font-size: 17px;
			font-family: 'Open Sans';
			margin-bottom: 0;
			border: #000 1px solid;
		}
	`
	const TableRowStyledGreen = styled(TableRow)`
	&:nth-of-type(odd) {
		background-color: #0c8c2a;
		padding-bottom: 1px;
		padding-top: 1px;
		margin-bottom: 0;
	}
	&:nth-of-type(even) {
		background-color: #0c8c2a;
		padding-bottom: 1px;
		padding-top: 1px;
		margin-bottom: 0;
	}
	& > td {
		padding-bottom: 4px;
		padding-top: 4px;
		font-weight: bold;
		text-align: left;
		-webkit-text-stroke: 0.5px black;
		color: white;
		text-shadow:
			2px 2px 0 #000,
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
		font-size: 17px;
		font-family: 'Open Sans';
		margin-bottom: 0;
		border: #000 1px solid;

	}
`

	const TableHeadStyled = styled(TableRow)`
		& > td {
			color: white;
			font-style: bold;
			text-align: left;
			font-size: 22px;
			font-family: 'Open Sans';
			background-color: #212529;
			padding-bottom: 5px;
			padding-top: 5px;
			margin-bottom: 0;
			border: #000 1px solid;
		}
	`

	return (
		<>
			<div className={styles.tableParent}>
				<div className={styles.table1}>
					<TableContainer
						component={Paper}
						className={styles.tableContainer}
					>
						<Table className={styles.table}>
							<TableHeadStyled className={styles.thead}>
								<TableCell className={styles.td}>#</TableCell>
								<TableCell className={styles.td}>Rate</TableCell>
								<TableCell className={styles.td}>
									Timer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$$&nbsp;&nbsp;&nbsp;
								</TableCell>
							</TableHeadStyled>
							<TableBody>
								{index1.map((item) => (
									item.id > 17 && item.id < 30 ?
										<TableRowStyledGreen
											className={styles.td}
											key={`Timer-${item.id}`}
										>
											<TableCell className={styles.td}>
												Table&nbsp;{item.id}
											</TableCell>
											<TableCell className={styles.td}>
												&nbsp; {item.booked ? getRateLabel(hourlyRate) : null}
											</TableCell>
											<TableCell className={styles.td}>
												<Counter
													key={item.id}
													id={item.id}
													booked={item.booked}
													reserved={item.reserved}
													disabled={item.disabled}
													secs={item.seconds}
													paid={item.amount}
													prepaid={item.prepaidAmount}
													setStatus={setStatus}

												/>
											</TableCell>
										</TableRowStyledGreen>
										:
										<TableRowStyledBlue
											className={styles.td}
											key={`Timer-${item.id}`}
										>
											<TableCell className={styles.td}>
												Table&nbsp;{item.id}
											</TableCell>
											<TableCell className={styles.td}>
												&nbsp; {item.booked ? getRateLabel(hourlyRate) : null}
											</TableCell>
											<TableCell className={styles.td}>
												<Counter
													key={item.id}
													id={item.id}
													booked={item.booked}
													reserved={item.reserved}
													disabled={item.disabled}
													secs={item.seconds}
													paid={item.amount}
													prepaid={item.prepaidAmount}
													setStatus={setStatus}

												/>
											</TableCell>
										</TableRowStyledBlue>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
				<div className={styles.div200}>
					<TableContainer className={styles.tableContainer}>
						<Table className={styles.table}>
							<TableHeadStyled className={styles.thead}>
								<TableCell className={styles.td}>#</TableCell>
								<TableCell className={styles.td}>Rate</TableCell>
								<TableCell className={styles.td}>
									Timer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$$&nbsp;&nbsp;&nbsp;
								</TableCell>
							</TableHeadStyled>
							<TableBody>
								{index2.map((item) => (
									item.id > 17 && item.id < 30 ?
										<TableRowStyledGreen
											className={styles.td}
											key={`Timer-${item.id}`}
										>
											<TableCell className={styles.td}>
												Table&nbsp;{item.id}
											</TableCell>
											<TableCell className={styles.td}>
												&nbsp; {item.booked ? getRateLabel(hourlyRate) : null}
											</TableCell>
											<TableCell className={styles.td}>
												<Counter
													key={item.id}
													id={item.id}
													booked={item.booked}
													reserved={item.reserved}
													disabled={item.disabled}
													secs={item.seconds}
													paid={item.amount}
													prepaid={item.prepaidAmount}
													setStatus={setStatus}

												/>
											</TableCell>
										</TableRowStyledGreen>
										:
										<TableRowStyledBlue
											className={styles.td}
											key={`Timer-${item.id}`}
										>
											<TableCell className={styles.td}>
												Table&nbsp;{item.id}
											</TableCell>
											<TableCell className={styles.td}>
												&nbsp; {item.booked ? getRateLabel(hourlyRate) : null}
											</TableCell>
											<TableCell className={styles.td}>
												<Counter
													key={item.id}
													id={item.id}
													booked={item.booked}
													reserved={item.reserved}
													disabled={item.disabled}
													secs={item.seconds}
													paid={item.amount}
													prepaid={item.prepaidAmount}
													setStatus={setStatus}

												/>
											</TableCell>
										</TableRowStyledBlue>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div >
		</>
	)
}

export default TableContainerComponent

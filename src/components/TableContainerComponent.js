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
	status,
	setStatus,
	id,
	total,
	setTotal,
	outstanding,
	setOutstanding
}) => {
	const { hourlyRate,dayRate,nightRate,satRate,timers } = useGlobalContext()

	const index1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16]
	const index2 = [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

	const slice2 = timers.slice(15,30)
	const slice1 = timers.slice(0,15)

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

	const TableRowStyled = styled(TableRow)`
		&:nth-of-type(odd) {
			background-color: #aaaaaa;
			padding-bottom: 1px;
			padding-top: 1px;
			margin-bottom: 0;
		}
		&:nth-of-type(even) {
			background-color: #dddddd;
			padding-bottom: 1px;
			padding-top: 1px;
			margin-bottom: 0;
		}
		& > td {
			color: black;
			padding-bottom: 4px;
			padding-top: 4px;
			font-weight: bold;
			text-align: left;
			font-size: 17px;
			font-family: 'Open Sans';
			margin-bottom: 0;
			border: #888888 1px solid;
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
		}
	`

	return (
		<>
			<div className={styles.div200}>
				<div className={styles.stats}>
					<b className={styles.due}>Due $ {outstanding}</b>
					<b className={styles.paid}>Paid $ {total}</b>
				</div>
				<TableContainer className={styles.tableContainer}>
					<Table className={styles.table}>
						<TableHeadStyled className={styles.thead}>
							<TableCell className={styles.td}>Table</TableCell>
							<TableCell className={styles.td}>Rate</TableCell>
							<TableCell className={styles.td}>
								Timer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$$
							</TableCell>
						</TableHeadStyled>
						<TableBody>
							{index2.map((index) => (
								<TableRowStyled
									key={`Timer-${index}`}
									className={styles.tr}
								>
									<TableCell className={styles.td}>
										Table&nbsp;{index}
									</TableCell>
									<TableCell className={styles.td}>
										&nbsp;{getRateLabel(hourlyRate)}
									</TableCell>
									<TableCell className={styles.td}>
										<Counter
											key={index}
											id={index}
											status={status[index]}
											setStatus={setStatus}
										/>
									</TableCell>
								</TableRowStyled>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={styles.table1}>
				<TableContainer
					component={Paper}
					className={styles.tableContainer}
				>
					<Table className={styles.table}>
						<TableHeadStyled className={styles.thead}>
							<TableCell className={styles.td}>Table</TableCell>
							<TableCell className={styles.td}>Rate</TableCell>
							<TableCell className={styles.td}>
								Timer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$$
							</TableCell>
						</TableHeadStyled>
						<TableBody>
							{index1.map((index) => (
								<TableRowStyled
									className={styles.tr}
									key={`Timer-${index}`}
								>
									<TableCell className={styles.td}>
										Table&nbsp;{index}
									</TableCell>
									<TableCell className={styles.td}>
										&nbsp; {getRateLabel(hourlyRate)}
									</TableCell>
									<TableCell className={styles.td}>
										<Counter
											key={index}
											id={index}
											status={status[index]}
											setStatus={setStatus}
										/>
									</TableCell>
								</TableRowStyled>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	)
}

export default TableContainerComponent

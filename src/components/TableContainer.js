import {useMemo} from 'react'
import styles from './TableContainer.module.css'

const TableContainer = ({
	primaryText,
	primaryText1,
	primaryText2,
	primaryText3,
	primaryText4,
	primaryText5,
	primaryText6,
	primaryText7,
	primaryText8,
	primaryText9,
	primaryText10,
	primaryText11,
	prop,
	primaryText12,
	primaryText13,
	iconRightTop,
	iconRightLeft,
}) => {
	const table1Style = useMemo(() => {
		return {
			top: iconRightTop,
			left: iconRightLeft,
		}
	}, [iconRightTop, iconRightLeft])

	return (
		<div
			className={styles.table1}
			style={table1Style}
		>
			<div className={styles.header}>
				<div className={styles.cell}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<div className={styles.primaryText}>Tables</div>
							<div className={styles.secondaryText}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell}>
					<div className={styles.rowCell1}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text1}>
							<div className={styles.primaryText}>
								{hourlyRate}
							</div>
							<div className={styles.secondaryText}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell2}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<div className={styles.primaryText}>Timer</div>
							<div className={styles.secondaryText}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<div className={styles.primaryText}>$$$</div>
							<div className={styles.secondaryText}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{primaryText}</b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD1}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText1}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText2}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD1}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText3}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText4}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD1}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText5}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText6}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD1}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText7}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText8}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD1}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText9}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText10}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD1}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText11}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<div className={styles.primaryText4}>
								<b>Table</b>
								<span>{` `}</span>
								<b>{prop}</b>
							</div>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD1}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText12}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowMainRecomponentizeD}>
				<div className={styles.cell4}>
					<div className={styles.rowCell}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>
								{primaryText13}
							</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}>{hourlyRate}</b>
							<div className={styles.secondaryText5}>
								Secondary Text
							</div>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell5}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
				<div className={styles.cell4}>
					<div className={styles.rowCell7}>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
						<div className={styles.text7}>
							<b className={styles.primaryText4}></b>
							<b className={styles.secondaryText4}>
								Secondary Text
							</b>
						</div>
						<img
							className={styles.iconLeft}
							alt=''
							src='/icon-left.svg'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TableContainer

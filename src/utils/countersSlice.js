import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{ id: 1, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 2, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 3, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 4, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 5, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 6, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 7, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 8, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 9, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 10, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 11, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 12, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 13, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 14, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 16, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 17, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 18, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 19, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 20, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 21, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 22, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 23, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 24, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 25, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 26, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 27, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 28, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 29, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 30, secs: 0, paid: 0, prepaid: 0, start: false },
	{ id: 31, secs: 0, paid: 0, prepaid: 0, start: false },
]

const countersSlice = createSlice({
	name: 'counters',
	initialState,
	reducers: {
		updateCounter: (state, action) => {
			const { id, updatedProps } = action.payload
			const counterIndex = state.findIndex((counter) => counter.id === id)
			if (counterIndex !== -1) {
				state[counterIndex] = {
					...state[counterIndex],
					...updatedProps,
				}
			}
		},
	},
})

export const { updateCounter } = countersSlice.actions

export default countersSlice.reducer

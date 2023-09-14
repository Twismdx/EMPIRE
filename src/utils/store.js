import { configureStore } from '@reduxjs/toolkit'
import countersReducer from './countersSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

const START_TIMER = 'START_TIMER'
const STOP_TIMER = 'STOP_TIMER'

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
export function startTimer(id) {
	return {
		type: START_TIMER,
		payload: id,
	}
}

export function stopTimer(id) {
	return {
		type: STOP_TIMER,
		payload: id,
	}
}

const UPDATE_SECS = 'UPDATE_SECS'

export function updateSecs(id, increment) {
	return {
		type: UPDATE_SECS,
		payload: { id, increment },
	}
}

const UPDATE_COUNTER = 'UPDATE_COUNTER'

export function updateCounter(id, updatedProps) {
	return {
		type: UPDATE_COUNTER,
		payload: {
			id,
			updatedProps,
		},
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_TIMER:
			return state.map((timer) =>
				timer.id === action.payload ? { ...timer, start: true } : timer
			)
		case STOP_TIMER:
			return state.map((timer) =>
				timer.id === action.payload ? { ...timer, start: false } : timer
			)
		case UPDATE_SECS:
			return state.map((timer) =>
				timer.id === action.payload.id
					? {
							...timer,
							secs: timer.secs + action.payload.increment,
							...timer,
							paid:
								timer.secs +
								action.payload.paidIncrement / 3600,
					  }
					: timer
			)
		default:
			return state
	}
}

export const store = configureStore({ reducer })

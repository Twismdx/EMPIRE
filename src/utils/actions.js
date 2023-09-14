export const decrementSeconds = () => ({
	type: 'DECREMENT_SECONDS',
})

export const decrementAmount = (amount) => ({
	type: 'DECREMENT_AMOUNT',
	payload: amount,
})

export const incrementSeconds = () => ({
	type: 'INCREMENT_SECONDS',
})

export const incrementAmount = (amount) => ({
	type: 'INCREMENT_AMOUNT',
	payload: amount,
})

export const updateSecs = (id, amount) => {
	return {
		type: 'UPDATE_SECS',
		payload: {
			id,
			amount,
		},
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

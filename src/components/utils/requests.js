export const flash = async (id) => {
    try {
        const response = await fetch(`https://10.1.0.100:8000/${id}/flash`,{
            method: 'POST',
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error("Oops! Something has gone wrong!")
        } else {
            console.log('Success:',result)
            return result
        }
    } catch (error) {
        console.error('Error:',error)
    }
}

export const lightOn = async (id) => {
    try {
        const response = await fetch(`https://10.1.0.100:8000/${id}/on`,{
            method: 'POST',
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error("Oops! Something has gone wrong!")
        } else {
            console.log('Success:',result)
            return result
        }
    } catch (error) {
        console.error('Error:',error)
    }
}

export const lightOff = async (id) => {
    try {
        const response = await fetch(`https://10.1.0.100:8000/${id}/off`,{
            method: 'POST',
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error("Oops! Something has gone wrong!")
        } else {
            console.log('Success:',result)
            return result
        }
    } catch (error) {
        console.error('Error:',error)
    }
}

export const allOn = async () => {
    try {
        const response = await fetch(`https://10.1.0.100:8000/on`,{
            method: 'POST',
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error("Oops! Something has gone wrong!")
        } else {
            console.log('Success:',result)
            return result
        }
    } catch (error) {
        console.error('Error:',error)
    }
}

export const allOff = async () => {
    try {
        const response = await fetch(`https://10.1.0.100:8000/off`,{
            method: 'POST',
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error("Oops! Something has gone wrong!")
        } else {
            console.log('Success:',result)
            return result
        }
    } catch (error) {
        console.error('Error:',error)
    }
}

export const getState = async (id) => {
    try {
        const response = await fetch(`https://10.1.0.100:8000/${id}/state`,{
            method: 'GET',
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error("Oops! Something has gone wrong!")
        } else {
            console.log('Success:',result)
            return result
        }
    } catch (error) {
        console.error('Error:',error)
    }
}
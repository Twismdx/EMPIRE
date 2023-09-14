import { UseFetch } from '../components/UseFetch'

function Flash(id,flash) {
    const { response,error } = UseFetch(id,flash)

    if (error) {
        return console.error(error)
    } else return response
}

export default Flash
import React,{ useState } from 'react'

const UseFetch = (url,url2) => {
  const [response,setResponse] = useState(null)
  const [error,setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`192.168.1.104:8000/${url}/${url2}`,{
          method: "POST",
        })
        const result = await response.json()
        setResponse(result)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  },[tableID,action])

  return { response,error }
}

export { UseFetch }
import { useEffect, useState } from "react"

const useUserData = ({setCount, limit, skip})=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [usersList, setUsersList] = useState([])
    const [userCount, setUserCount]= useState(0)

useEffect(()=>{
    try {
        setLoading(true)
        (async ()=>{
            const res =await fetch(`https://dummyjson.com/user?skip=${skip}&limit=${limit}`)
           
            const result = await res.json();
            setUsersList(result?.users)
            setUserCount(result.total)
            setLoading(false)
        })()
    } catch (error) {
        setError(JSON.stringify(error))
        console.log("error", error)
        setLoading(false)
    }
   
},[limit, skip])
// console.log("usersList", usersList)
return {usersList, userCount, loading, error}
}

export default useUserData
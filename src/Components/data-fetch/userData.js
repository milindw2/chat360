import { useEffect, useState } from "react"

const useUserData = ({setCount, limit, skip})=>{
    const [usersList, setUsersList] = useState([])
    const [userCount, setUserCount]= useState(0)

useEffect(()=>{
    try {
        // setLoading(true)
        (async ()=>{
            const res =await fetch(`https://dummyjson.com/user?skip=${skip}&limit=${limit}`)
           
            const result = await res.json();
            setUsersList(result?.users)
            setUserCount(result.total)
        })()
    } catch (error) {
        // setError(JSON.stringify(error))
        console.log("error", error)
    
    }
   
},[limit, skip])
// console.log("usersList", usersList)
return {usersList, userCount}
}

export default useUserData
import { useEffect, useState } from "react"

const useUserData = ({setCount, limit, skip})=>{
    const [usersList, setUsersList] = useState([])
    const [userCount, setUserCount]= useState(0)
    
useEffect(()=>{
    (async ()=>{
        const res =await fetch(`https://dummyjson.com/user?skip=${skip}&limit=${limit}`)
        const result = await res.json();
        // console.log("result in user data", result)
        setUsersList(result?.users)
        setUserCount(result.total)
    })()
},[limit, skip])
// console.log("usersList", usersList)
return {usersList, userCount}
}

export default useUserData
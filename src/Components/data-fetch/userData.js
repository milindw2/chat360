import { useEffect, useState } from "react"

const useUserData = ({setCount, limit})=>{
    const [usersList, setUsersList] = useState([])
    
useEffect(()=>{
    (async ()=>{
        const res =await fetch(`https://dummyjson.com/user?skip=10&limit=${limit}`)
        const result = await res.json();
        // console.log("result in user data", result)
        setUsersList(result?.users)
        setCount(result.total)
    })()
},[limit])
// console.log("usersList", usersList)
return {usersList}
}

export default useUserData
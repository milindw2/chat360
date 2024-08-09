import { useEffect, useState } from "react"

const useUserData = ()=>{
    const [users, setUsers] = useState([])
useEffect(()=>{
    (async ()=>{
        const res =await fetch("https://dummyjson.com/user?skip=10&limit=60")
        const result = await res.json();
        // console.log(result)
        setUsers(result)
    })()
},[])
return users
}

export default useUserData
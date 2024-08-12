import { useEffect, useState } from "react"

const useUserSearchData = ()=>{
    // const [searchResult, setSearchResult] = useState([])
    
const search =    async (searchString)=>{
    try {
        const res =await fetch(`https://dummyjson.com/users/search?q=${searchString}`)
        const result = await res.json();
   
    return {users:result.users, count: result.total }
    } catch (error) {
        console.log(error)
    }
    
}
return {search}
}

export default useUserSearchData
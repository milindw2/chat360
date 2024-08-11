import { useEffect, useState } from "react"

const useUserSearchData = ()=>{
    // const [searchResult, setSearchResult] = useState([])
const search =    async (searchString)=>{
    const res =await fetch(`https://dummyjson.com/users/search?q=${searchString}`)
    const result = await res.json();
    // console.log("result",result.users)
    // setSearchResult(result.users)
    // setCount(result.total)
    return {users:result.users, count: result.total }
}
return {search}
}

export default useUserSearchData
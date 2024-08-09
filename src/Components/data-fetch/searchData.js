import { useEffect, useState } from "react"

const useUserSearchData = (searchString)=>{
    const [searchResult, setSearchResult] = useState([])
useEffect(()=>{
    (async ()=>{
        const res =await fetch(`https://dummyjson.com/users/search?q=${searchString}`)
        const result = await res.json();
        console.log("result",result.users)
        setSearchResult(result.users)
    })()
},[searchString])
return {searchResult}
}

export default useUserSearchData
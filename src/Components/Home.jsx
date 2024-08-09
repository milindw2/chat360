import React, { useEffect, useState } from 'react'
import useUserData from './data-fetch/userData'
import Card from './Card';
import Searchbar from './Searchbar';
import useUserSearchData from './data-fetch/searchData';

const Home = () => {
    const [searchString, setSearchstring] = useState("")
    const {users} = useUserData();
    const [data, setData] = useState([])
    const {searchResult} = useUserSearchData(searchString)
    useEffect(()=>{
        console.log("searchString", searchString)
        if(searchString !== ""){
            console.log("searchResult", searchResult)
            setData(searchResult)
        } else{
            setData(users)
        }
    }, [searchString, searchResult])
    useEffect(()=>{
        setData(users)
    },[users])
    // console.log(users)
    useEffect(()=>{
        console.log("data", data)
    },[data])
  return (
    <div className="">
    <Searchbar setSearchstring={setSearchstring} />
    <div className='m-2 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2'>
        {data?.map((user)=>{
            return(

                <Card key={user.id} user={user}/>
            )
        })}
    </div>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import useUserData from './data-fetch/userData'
import Card from './Card';
import Searchbar from './Searchbar';
import useUserSearchData from './data-fetch/searchData';
import InfiniteScroll from 'react-infinite-scroll-component';
const Home = () => {
    const [searchString, setSearchstring] = useState("")
    const [count, setCount] =useState(0)
    const [limit, setLimit] = useState(30)
    const {usersList} = useUserData({setCount, limit});
    const [data, setData] = useState([])
    const {searchResult} = useUserSearchData({searchString, setCount})
    useEffect(()=>{
        
        if(searchString !== ""){
            setData(searchResult)
        } else{
            setData(usersList)
        }
    }, [searchString, searchResult])
    useEffect(()=>{
        setData(usersList)
    
    },[usersList])
    // useEffect(()=>{
    //     console.log("limit", limit)
    // },[limit])
  return (
    <div className="">
    <Searchbar setSearchstring={setSearchstring} />
    <InfiniteScroll 
        dataLength={data.length}
        next={()=>{setLimit(limit + 30)}}
        hasMore={count > limit}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
    
    >
    <div className='m-2 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2'>
        {data?.map((user)=>{
            return(

                <Card key={user.id} user={user}/>
            )
        })}
    </div>
    </InfiniteScroll>
    </div>
  )
}

export default Home
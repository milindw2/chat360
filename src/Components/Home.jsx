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
    const [skip, setSkip] = useState(0)
    const [tempData, setTempData] = useState([])
    const {usersList, userCount} = useUserData({setCount, limit, skip});
    const [data, setData] = useState([])
    const {search} = useUserSearchData()
    useEffect(()=>{
        if(searchString !== ""){
          (async()=>{
             setTempData(data)
            const searchResult = await search(searchString)
            setData(searchResult.users)
            setCount(searchResult.count)
           })()
            
        } else{
            // setSkip(0)
            setCount(userCount)
            setData(tempData)
        }
    }, [searchString])
    useEffect(()=>{
      if (usersList && usersList.length) {
        const dataIds = data.map(user => user.id);
        const newUsers = usersList.filter(user => !dataIds.includes(user.id));  
        if (newUsers.length > 0) {
          setData(prevData => [...prevData, ...newUsers]);
        }
      }
      setCount(userCount)
    },[usersList])

  return (
    <div className="">
    <Searchbar setSearchstring={setSearchstring} />
    <InfiniteScroll 
        dataLength={data.length}
        next={()=>{setSkip(skip + 30)}}
        hasMore={count > data.length}
        loader={<h4 className='text-md'>Loading...</h4>}
        endMessage={
          <p className='text-center'>
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
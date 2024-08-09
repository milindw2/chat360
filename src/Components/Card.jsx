import React from 'react'

const Card = ({user}) => {
  return (
    <div>
        <div className="  border border-gray-500 bg-gray-50  max-w-sm">
            <div className="flex justify-center">
                <img src={`${user.image}`} alt='profile img'/>
            </div>
            
            <h1 className='text-xl text-gray-800 pt-2'>Name :  {`${user.firstName} ${user.lastName}`} </h1>
            <h1 className='text-xl text-gray-800 pt-2 break-words'>Email : {user.email} </h1>
            <h1 className='text-xl text-gray-800 pt-2'>Phone :  {user.phone} </h1>
            <h1 className='text-xl text-gray-800 pt-2'>Role :  {user.role} </h1>
        </div>
    </div>
  )
}

export default Card
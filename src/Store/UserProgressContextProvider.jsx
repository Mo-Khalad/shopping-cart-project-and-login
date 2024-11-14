import React, { useState } from 'react'
import UserProgressContext from './UserProgressContext'
const UserProgressContextProvider = ({children}) => {
const [userProgress , setUserProgress] = useState('')
const showCart =()=>setUserProgress('cart')
const hideCart =()=> setUserProgress('')
const showCheckOut =()=>setUserProgress('checkOut')
const hideCheckOut =()=>setUserProgress('')
const userProgressCtx={
progress:userProgress,
showCart ,
hideCart ,
showCheckOut ,
hideCheckOut
}
return (
    <UserProgressContext.Provider value={userProgressCtx}>
        {children}
    </UserProgressContext.Provider>
  )
}
export default UserProgressContextProvider


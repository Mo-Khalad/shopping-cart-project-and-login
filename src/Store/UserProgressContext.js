import { createContext } from 'react'
const userProgressContext = createContext({
 progress:'',
 showCart:()=>{} ,
 hideCart:()=>{} ,
 showCheckOut:()=>{},
 hideCheckOut:()=>{},   
})
export default userProgressContext

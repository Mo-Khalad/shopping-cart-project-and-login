import React ,{ useState } from 'react'
import { TokenContext } from "./TokenContext.js";


export const TokenContextProvider = ({children}) => {

  const [ token , setToken ] = useState(null)
const TokenCrx ={
  token ,
  setToken
}   
  return (    
        <TokenContext.Provider value={TokenCrx}>
          {children}
        </TokenContext.Provider>
      );
  
}

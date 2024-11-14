import axios from "axios"
import { useCallback , useEffect, useState } from "react"
export const sendHttpRequest= async (url , config , method )=>{
    let response ='';
if(method === 'Get'){
    response = await axios(url , config)
} 
else if(method==='post'){
   
    response=await axios.post(url , config)  
}
else if(!response.ok){
      throw  new Error(response.message|| "error");
}
 return response
}
export const useHttp = (url, method , config ,initialData )=>{
    const [data ,setData]=useState(initialData)
    const [isLoading ,setIsLoading]=useState(false)
    const [error , setError]=useState()
    const sendRequest = useCallback(async function sendRequest(){
   setIsLoading(true)
     try{
         const resData= await sendHttpRequest(url  , {...config } , method )
         setData(resData.data)
     }catch(error){
        setError(error.message || 'SomeThing went wrong!')
     }
   setIsLoading(false)
 } 
, [url , config , method]) 
   useEffect(()=>{
    ((config && (config.method==='Get'||!config.method))|| !config)&& sendRequest()     
}, [sendRequest , config ]) 
   return{
        data,
        isLoading,
        error,
        sendRequest
    }
}
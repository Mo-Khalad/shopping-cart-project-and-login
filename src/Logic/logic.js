export const checkValidationFormInput=(state, { type, payload } )=>{   
switch (type) {
    case "first_name":
      return { ...state, first_name: payload };
    case "last_name":
      return { ...state, last_name: payload };
    case "age":
      return { ...state, age: payload };
    case "email":
      return { ...state, email: payload };
    case "password":
      return { ...state, password: payload };
    case "reset":
      return {
        ...state,
        first_name: payload,
        last_name: payload,
        email: payload,
        age: payload,
        password: payload,
      };
      case "submit":
      return {        
        ...state,
        first_name:payload, 
        last_name: payload,
        email: payload,
        age: payload,
        password: payload,
      }; 
        default : return state
      }                     
}
export const currencyFormatter = new Intl.NumberFormat('en-US' , {
  style:'currency',
  currency:'USD'
})
export const totalPriceProduct=(price , count)=>{
return (price * count).toFixed(2)
}
export const totalPriceProducts=(item)=>{
 return item.reduce((total , item)=>{
    return ( total + (item.price * item.quantity))
},0).toFixed(2) 
}
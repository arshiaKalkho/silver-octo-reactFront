const authState = {//the initial state of the reducer
  isLoggedIn: false,
  user:{
    name:"",
    expires_at: "",
    jwttoken:"",
    authorities:""
  }
}


const authReducer = (state = authState, action)=>{
  return state
}
export default authReducer;
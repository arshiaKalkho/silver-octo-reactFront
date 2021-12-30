import { AUTO_LOGIN,LOGIN,REGISTER, LOGOUT } from "./Types";
import axios from 'axois'


const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;




export const AUTO_LOGIN = (userState, history,setErrorHandler) => {
    //try to login from local storage stored jwt refresh token
    //nothing happens if user can't be logged in since our specific
    //site doesn't require authentication for the most part
    return async (dispatch)=>{
        
        const jwt = localStorage.getItem(jwtRefresh)
        

        axios.post(baseUrl+"login")
        
        
        
        
        dispatch({
        type: AUTO_LOGIN,
        payload: jwt
        })
    }
  };

  export const LOGIN = () => dispatch => {
    //login the user and generate a refresh token,
    // then save it to the local storage so auto login
    //can do its job when its time (if token isn't exired by then)



  }

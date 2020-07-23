import axios from 'axios'
import jwtDecode from "jwt-decode";
import history from '../routes/history';
import { AUTH_SAVE_USER, CHANGE_AUTHORIZATION, LOGOUT_USER } from './actionTypes/index';


export const logout = () => {
    return dispatch => {
        dispatch({ type: CHANGE_AUTHORIZATION, payload: false })
        dispatch({ type: LOGOUT_USER })
        localStorage.removeItem("token")
        history.push('/')
    }
}


export const signup = (formInfo) => {
    return async dispatch => {
        try {
            const { data } = await axios.post('http://localhost:3003/signup', formInfo)
            const decodedToken = jwtDecode(data.token)
            dispatch({ type: AUTH_SAVE_USER, payload: decodedToken })
            dispatch({ type: CHANGE_AUTHORIZATION, payload: true })
            localStorage.setItem("token", data.token)
            history.push('/profile')
        } catch (e) {
            console.log(e)
        }
    }
}

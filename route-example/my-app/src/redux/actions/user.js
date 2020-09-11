import axios from 'axios'
import { ADD_USER } from './../actionTypes'

export const addUser = (user) => {
  return async dispatch => {
    try {
      const data = await axios.post('http://localhost:3001/register', user)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}



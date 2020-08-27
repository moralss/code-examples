import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/actions/auth';

const Profile = () => {
  const dispatch = useDispatch()


  return (
    <div>
      <h1> Welcome to your profile page </h1>
    </div>
  )
}


export default Profile;

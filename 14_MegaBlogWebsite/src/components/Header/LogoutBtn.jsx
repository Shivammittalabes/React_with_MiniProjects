import React from 'react'
import { useDispatch, useDispatch } from 'react-redux'
import authService from '../../appwrite/conf'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const useDispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then( () => {
            dispatch(logout())
        } ) 
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      Logout
    </button>
  )
}

export default LogoutBtn

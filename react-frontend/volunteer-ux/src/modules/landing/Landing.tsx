import React from 'react'
import { Login } from '../login/Login'

export const Landing = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1>Landing</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 d-flex min-vh-100 justify-content-center align-items-center'>
                <Login/>
            </div>
        </div>
    </div>
  )
}

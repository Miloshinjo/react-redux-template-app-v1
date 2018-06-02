import React from 'react'
import { Link } from 'react-router-dom'

export const WelcomePage = () => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>React + Redux App </h1>
      <p>Some tagline</p>
      <Link to='/content'>App Content</Link>
    </div>
  </div>
)

export default WelcomePage

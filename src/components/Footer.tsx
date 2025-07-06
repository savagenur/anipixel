import React from 'react'
import ThemeToggle from './ThemeToggle'

const Footer = () => {
  return (
    <div className='pt-15 main-padding pb-10'>
      <p className='text-2xl font-semibold mb-3 text-textTitle'>Site theme</p>
      <ThemeToggle />

    </div>
  )
}

export default Footer
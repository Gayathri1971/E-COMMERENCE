import React from 'react'
// import Cards from './Mobile'
import Mobile from './Mobile'
import Printer from './Printer'
import Tablets from './Tablets'
import Tv from './Tv'
import Laptop from './Laptop'


export default function Header(props) {
  return (
    <div className='container1'>
      <div className='mobile'>
        <Mobile/>
        </div>
        <div className='tv'>
        <Tv/>
        </div>
        <div className='laptop'>
        <Laptop/>
        </div>
        <div className='tablets'>
        <Tablets/>
        </div>
        <div className='printer'>
        <Printer/>
        </div>
    </div>
  )
}

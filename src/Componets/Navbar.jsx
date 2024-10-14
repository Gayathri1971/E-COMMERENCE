import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='container-navbar'>
        <nav className='navbar'>
          <h1>E-COMMERENCE</h1>
        <ul>
          <li >
          <Link to='/'>All Products</Link>
        </li>
        <li >
          <Link to='/Mobile'>Mobile</Link>
        </li>
        <li >
        <Link to='/Tv'>Tv's</Link>
        </li>
        <li>
        <Link to='/Laptop'>Laptops</Link>
        </li>
        <li >
        <Link to='/Tablets'>Tablets</Link>
        </li>
        <li >
        <Link to='/Printer'>Printer</Link>
        </li>
      </ul>
</nav>
    </div>
  )
}
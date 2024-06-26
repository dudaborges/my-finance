import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/transactions">Transactions</Link>
        </nav>
    </header>

  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.css'



export default function Navbar() {
  return (
    <div>
      <nav className="nav">
            <Link to = "/home" className="nav-item">About Me</Link>
            <Link to = "/about" className="nav-item">Skills</Link>
            <Link to = "/contact" className="nav-item">Projects</Link>
      </nav>
    </div>
  )
}

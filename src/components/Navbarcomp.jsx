import React from 'react'

const Navbarcomp = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <div className="container-fluid">
          <span className="navbar-brand mb-0">Dashboard</span>
          <a className="mx-4 text-dark" href="">
            Logout
          </a>
        </div>
      </nav>
  )
}

export default Navbarcomp
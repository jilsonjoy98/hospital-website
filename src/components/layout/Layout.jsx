import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="app-container">
      <Navbar />

      {/* The Main section grows to fill space, pushing Footer down */}
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout (): JSX.Element {
  return (
    <main className="main">
      <div className="main__container container">
        <Outlet />
      </div>
    </main>
  )
}

export default MainLayout

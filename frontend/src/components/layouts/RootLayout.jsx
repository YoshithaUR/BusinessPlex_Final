import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* //add footer here <Footer/> */}
        </>
    )
}

export default RootLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import MainFooter from './footer/MainFooter'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <MainFooter />
        </>
    )
}

export default RootLayout

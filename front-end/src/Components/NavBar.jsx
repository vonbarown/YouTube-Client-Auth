import React from 'react'
import './component.css'
export const Navbar = ({ logOutUSer, isUserLoggedIn }) => {

    if (isUserLoggedIn) {
        return (
            <div className='navbar'>
                <h3>YouTube</h3>
                <div className='navItems'>
                    <a href="/">Home</a> {'  '}
                    <a href="/about">About</a>
                    <button onClick={logOutUSer}>log out</button>
                </div>
            </div>
        )

    } else {
        return (
            <div className='navbar'>
                <h3>YouTube</h3>
                <div className='navItems'>
                    <a href="/">Home</a> {'  '}
                    <a href="/about">About</a>
                </div>
            </div>
        )
    }



}
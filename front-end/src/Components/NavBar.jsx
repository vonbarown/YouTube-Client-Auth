import React from 'react'
import './component.css'
export const NavBar = (props) => {

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
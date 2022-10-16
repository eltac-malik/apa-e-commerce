import Navbar from 'components/Navbar/Navbar'
import Categories from 'components/Categories/Categories'
import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <Navbar/>
            <Categories/>
        </div>
    )
}

export default Header
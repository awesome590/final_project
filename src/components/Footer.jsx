import React from 'react'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className='footer_links'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Items</Link>
                    <Link to='/'>About</Link>
                </div>
                <figure className='footer_logo'>
                    <img src='' alt='Logo' />
                </figure>
            </div>
        </footer>
    )
}

export default Footer

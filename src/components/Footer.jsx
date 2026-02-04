import React from 'react'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <figure className='footer_logo'>
                <img src='' alt='Logo' />
            </figure>
            <div className='footer_links'>
                <Link to='/'>Home</Link>
                <Link to='/'>Home</Link>
                <Link to='/'>Home</Link>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav className="navarea">
            <Link to="/">Home</Link>
            <Link to="../plans">Plans</Link>
            <Link to="../faq">FAQ</Link>
            <Link to="../MyLocker">MyLocker</Link>
        </nav>
    );
}

export default Nav;
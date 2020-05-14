import React from 'react';

function Navbar(props) {
    return (
        <nav className="uk-navbar-container uk-margin uk-width-expand" uk-navbar="true">
        {props.children}
    </nav>
);
}
    
export default Navbar;
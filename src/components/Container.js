import React from "react";

function Container(props) {
    return (
        <div className='container uk-flex uk-flex-column uk-flex-middle'>
            {props.children}
        </div>
    );
}

export default Container;
import React from 'react';

const Link = (props) => {
    return ( 
        <a
            href={props.url}
            style={
                {
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }
            }
        >
            {props.children}
        </a>
     );
}
 
export default Link;
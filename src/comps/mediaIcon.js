import React from 'react';

const TopBar = (props) => {
    return ( 
        <img
            src={props.src}
            alt={props.alt}
            style={{
                width: 35,
                marginLeft: 15,
                marginRight: 15,
            }}
        />
     );
}
 
export default TopBar;
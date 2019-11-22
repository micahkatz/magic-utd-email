import React from 'react';

const Bold = (props) => {
    return ( 
        <span style = {{ fontWeight: 'bold' }}>
            {props.children}
        </span>
     );
}
 
export default Bold;
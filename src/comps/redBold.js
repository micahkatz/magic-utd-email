import React from 'react';
import {Colors} from './colors';

const RedBold = (props) => {
    return ( 
        <span style = {{ fontWeight: 'bold', color: Colors.red}}>
            {props.children}
        </span>
     );
}
 
export default RedBold;
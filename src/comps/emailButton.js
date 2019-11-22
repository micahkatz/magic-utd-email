import React from 'react';
import MediaIcon from './mediaIcon';
import {Colors} from './colors';

const EmailButton = () => {
    return ( 
        <div
            style={{
                width: 150,
                padding: 10,
                alignText: 'center',
                backgroundColor: Colors.red,
                borderRadius: 30,
                marginBottom: 10
            }}
        >
            <a
                href={'mailto: magic.utdallas@gmail.com'}
                style={{
                    textDecoration: 'none',
                    color: Colors.white,
                    fontWeight: 'bold'
                }}
            >
                Email Us
            </a>
        </div>
     );
}
 
export default EmailButton;
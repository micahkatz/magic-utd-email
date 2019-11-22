import React, { Component } from 'react';
import Footer from '../comps/footer';
import Line from '../comps/line';
import Center from '../comps/center';
import {VARS} from '../edits/vars';
import EmailContent from '../edits/emailContent';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div
                style={{
                    textAlign: 'center',
                    padding: 10
                }}
            >
            
                <div
                    style={{
                        width: '100%',
                        maxWidth: 600
                    }}
                >
                    <img
                        src={VARS.headerImgUrl}
                        alt="website logo"
                        style={{
                            width: '100%'
                        }}
                    />
                    <Center>
                        <EmailContent 
                            style={{
                                width: '95%',
                                textAlign: 'left'
                            }}
                        />
                    </Center>
                    <Line />
                    <Footer />
                </div>
            </div>
         );
    }
}
 
export default Home;
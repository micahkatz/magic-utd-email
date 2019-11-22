import React, { Component } from 'react';
import MediaList from './mediaList';
import Center from './center';
import {Colors} from './colors';
import EmailButton from './emailButton';
import Line from './line';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div
                style={{
                    textAlign: 'center',
                    padding: 15
                }}
            >
                <Center>
                    <EmailButton/>
                </Center>
                <div
                    style={{
                        padding: 5
                    }}
                    >
                    <p
                        style={{
                            fontSize: 12,
                            color: Colors.grey
                        }}
                        >
                        Magic UTD · The University of Texas at Dallas · Richardson, TX 75080 · USA
                    </p>
                </div>
                <Center>
                    <MediaList/>
                </Center>
                <Line/>
                <Center>
                    <img
                        src={"https://lh3.googleusercontent.com/qIijjDnhgB1WBCY3YRSoqj-oxpO2pcfkcbT3q7no4fYqWowJhKieQGEzU5IFGVl5yJV-E6sjp8M_7YUJfxmOpOlgvwUu6fz6oUm9B6GaC_fZ1amJij7U6LzqaXew03Tzl_NoY_-o=w2400"}
                        style={{
                            height: 75,
                            tintColor: Colors.grey,
                            margin: 20
                        }}
                    />
                </Center>
            </div>
         );
        }
    }
    
export default Footer;
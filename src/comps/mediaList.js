import React from 'react';
import MediaIcon from './mediaIcon';

const MediaList = () => {
    return ( 
        <div
            style={{
                flexDirection: 'row'
            }}
        >
            <a
                href={'https://www.facebook.com/magicutdallas/'}
            >
                <MediaIcon
                    src={"https://lh3.googleusercontent.com/BfqpDGzCv0z0_dbO8Rvsbp5wcPTdaH0A9yl9PnWTqNuisshRjy5QfIRfYc1fhgdCyp9Ud2lTDHPu4ByNpw9Dk4cJ6Kq0LZkmn3XPihSb-NZWfY0bXA_DPG6d-1RMcggpu9MSAtYn=w2400"}
                    alt="website logo"
                />
            </a>
            <a
                href={'https://www.instagram.com/magicutdallas/'}
            >
                <MediaIcon
                    src={"https://lh3.googleusercontent.com/GxVikXwuWF37IF7B4SgcVZtZ5Efsu-WFUdXBXv0TwhMgdSv5EGghL6fbVZgThlWbb7W7u3idftAvaclEjuVKFESJp3XTLaHmIm0sUk0ql42kCWXE_X8JdWmuRE3fW1yidNIXz_Op=w2400"}
                    alt="website logo"
                />
            </a>
            <a
                href={'https://twitter.com/magicutdallas'}
            >
                <MediaIcon
                    src={"https://lh3.googleusercontent.com/H8UzyN0HSJpAVvu6dbFrbgCuOY9Aan9GPx84FixIQT_xGhYnGFSt0zt_gaEZXugCd4ap5JmncDGJAUp9UB8nXPCSVhG0Wh5TLjx1ttH8j90wY9JA8_ZcbdCKqJnYtW_Uocuxsbhw=w2400"}
                    alt="website logo"
                />
            </a>
        </div>
     );
}
 
export default MediaList;
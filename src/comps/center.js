import React from 'react';

const Center = (props) => {
    return (
        <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
            <tr>
                <td align="center">
                    {props.children}
                </td>
            </tr>
        </table>
    );
}

export default Center;
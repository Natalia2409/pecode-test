import React from 'react';

function CardForLocation({ id, name, dimension}) {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{dimension}</td>
        </tr>
    )
}

export default CardForLocation;

import React from 'react'

function CardForEpisode({ id, name, episode }) {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{episode}</td>
        </tr>
    )
}

export default CardForEpisode;

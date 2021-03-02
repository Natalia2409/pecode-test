import React from 'react';
import CardForLocation from "../View/CardForLocation";

function PostLocation({ locations }) {
    return (
        <div className="character">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name of locations</th>
                    <th scope="col">Dimension</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map(loc => <CardForLocation {...loc} key={loc.id} />)}
                </tbody>
            </table>
        </div>
    )
}

export default PostLocation;
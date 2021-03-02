import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/characters">Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/episodes">Episodes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/locations">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/watchlist">My watch list</Link>
                    </li>
                </ul>
            </div>
            <hr />
        </div>
    )
}

export default Menu

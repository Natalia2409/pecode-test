import React from 'react'

function Card({ image, name, gender, species, openPopup, id }) {
    return (
        <div onClick={() => openPopup(id)} className="card">
            <img className="card-img-top" src={image} alt="card" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{gender}</p>
                <p className="card-text">{species}</p>
            </div>
        </div>
    )
}

export default Card;

import React, { useState } from "react";

const PostStatusFilter = ({ filter, onFilterSelect }) => {

    const start = [
        {name: "all", label: "All"},
        {name: "like", label: "Liked"}
    ]

    const [buttons] = useState(start);

    const button = buttons.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "btn-info" : "btn-outline-secondary"
        return (
            <button
                onClick={() => onFilterSelect(name)}
                className={`btn ${clazz}`}
                key={name} >{label}</button>
        )
    });

    return (
        <div className="btn-group">
            {button}
        </div>
    )
}

export default PostStatusFilter;
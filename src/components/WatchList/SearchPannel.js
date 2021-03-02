import React, { useState } from "react";

const SearchPannel = ({ onUpdateSearches }) => {

    const [term, setTerm] = useState("");

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearches(term);
    };

    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Find film"
            onChange={onUpdateSearch}
        />
    )
}

export default SearchPannel;
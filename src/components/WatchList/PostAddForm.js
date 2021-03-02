import React, { useState } from "react";

const PostAddForm = ({ onAdd }) => {

    const [text, setText] = useState();

    const onValueChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText("")
    }

    return (
        <form
            className="bottom-panel d-flex"
            onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add new favourite film"
                className="form-control new-post-label"
                onChange={onValueChange}
                value={text}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Add film
            </button>
        </form>
    )
}

export default PostAddForm;
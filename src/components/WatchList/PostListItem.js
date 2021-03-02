import React from "react";

const PostListItem = ({ label, onDelete, onToggleImportant, onToggleLiked, important, like }) => {

    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
        classNames += " important";
    }

    if (like) {
        classNames += " like";
    }

    return (
        <div className={classNames}>
            <span onClick={onToggleLiked} className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleImportant} type="button" className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" onClick={onDelete} className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem;
import React from "react";
import PostListItem from "./PostListItem";
import { ListGroup } from "reactstrap";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

    const elements = posts ? posts.map((post) => {
        const {id} = post;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    {...post} />
            </li>
        )
    }) : "Add your first favourite film..."

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;
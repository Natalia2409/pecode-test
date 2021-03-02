import React from 'react';
import Card from "../View/CardForCharacters";

function Posts({ posts, openPopup }) {
    return (
        <div className="character">
            {posts.map(post => <Card {...post} openPopup={openPopup} key={post.id} />)}
        </div>
    )
}

export default Posts;

import React from "react";

const AppHeader = ({ liked, allPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>Nataliia Rudomyr</h1>
            <h2>{allPosts} films, liked {liked}</h2>
        </div>
    )
}

export default AppHeader;
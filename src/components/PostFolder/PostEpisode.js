import React from 'react';
import CardForEpisode from "../View/CardForEpisode";

function PostEpisode({ episodes }) {
    return (
        <div className="character">
            <table class="table table-episode">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name of episode</th>
                    <th scope="col">Number</th>
                    </tr>
                </thead>
                <tbody>
                    {episodes.map(episode => <CardForEpisode {...episode} key={episode.id} />)}
                </tbody>
            </table>
        </div>
    )
}

export default PostEpisode;
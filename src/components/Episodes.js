import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../redux/actions";
import PostEpisode from "./PostFolder/PostEpisode";
import ReactPaginate from "react-paginate";

function Episodes() {

    const dispatch = useDispatch();
    const episodes = useSelector(state => state.episodes.episodes);

    const newEpisodes = [];

    episodes.map(ep => Object.keys(ep).map(key => (
        newEpisodes.push(ep[key])
    )));

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);

    console.log(newEpisodes);

    useEffect(() => {
        dispatch(getEpisodes())
    }, []);

    const indexOfLastEpisode = currentPage * postsPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - postsPerPage;
    const currentEpisode = newEpisodes.slice(indexOfFirstEpisode, indexOfLastEpisode);

    const [value, setValue] = useState("");

    const filteredEpisodes = currentEpisode.filter(episode => {
            return episode.name.toLowerCase().includes(value.toLowerCase());
        })

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageCount = () => {
        const pageNumber = [];

        for (let i = 1; i <= Math.ceil(newEpisodes.length / postsPerPage); i++) {
            pageNumber.push(i);
        }

        return pageNumber.length;
    }

    const handlePage = (e) => {
        const selected = e.selected;

        paginate(selected + 1);
    }

    return (
        <div>
            <input
                className="form-control search-input"
                type="text"
                placeholder="Find episode"
                onChange={(event) => setValue(event.target.value)}
            />
            <div className="episode">
                <PostEpisode episodes={filteredEpisodes} />
                <ReactPaginate
                    pageCount={pageCount()}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    onPageChange={handlePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    initialPage={0}
                    />
            </div>
        </div>
    )
}

export default Episodes;

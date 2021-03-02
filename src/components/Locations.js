import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getLocations} from "../redux/actions";
import ReactPaginate from "react-paginate";
import PostLocation from "./PostFolder/PostLocation";

function Locations() {

    const dispatch = useDispatch();
    const locations = useSelector(state => state.locations.locations);

    const newLocations = [];

    locations.map(loc => Object.keys(loc).map(key => (
        newLocations.push(loc[key])
    )));

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        dispatch(getLocations())
    }, []);

    const indexOfLastLocation = currentPage * postsPerPage;
    const indexOfFirstLocation = indexOfLastLocation - postsPerPage;
    const currentPosts = newLocations.slice(indexOfFirstLocation, indexOfLastLocation);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(currentPosts);

    const pageCount = () => {
        const pageNumber = [];

        for (let i = 1; i <= Math.ceil(newLocations.length / postsPerPage); i++) {
            pageNumber.push(i);
        }

        return pageNumber.length;
    }

    const handlePage = (e) => {
        const selected = e.selected;

        paginate(selected + 1);
    }

    const [value, setValue] = useState("");

    const filteredEpisodes = currentPosts.filter(episode => {
            return episode.name.toLowerCase().includes(value.toLowerCase());
        })

    return (
        <div>
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search location`s name or dimension..."
                onChange={(event) => setValue(event.target.value)}
            />
            <div className="character">
                <PostLocation locations={filteredEpisodes} />
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

export default Locations;

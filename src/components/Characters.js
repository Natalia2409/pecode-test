import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCharacters, getChar} from "../redux/actions";
import Modal from "react-modal";
import Posts from "./PostFolder/PostCharacter";
import ReactPaginate from "react-paginate";

function Characters() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.characters);
    const char = useSelector(state => state.currentChar.currentChar);
    const [inputValue, setInputValue] = useState("");

    const [newArr, setNewArr] = useState([]);

    const length = []

    characters.map(char => Object.keys(char).map(key => {
        length.push(char[key])
        newArr.push(char[key])
    }));

    useEffect(() => {
        dispatch(getCharacters())
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = newArr.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openPopup = (id) => {
        setModalIsOpen(true);
        dispatch(getChar(id));
    }

    const pageCount = () => {
        const pageNumber = [];

        for (let i = 1; i <= Math.ceil(length.length / postsPerPage); i++) {
            pageNumber.push(i);
        }

        return pageNumber.length;
    }

    const handlePage = (e) => {
        const selected = e.selected;
        paginate(selected + 1);
    }

    const filterInputPerson = (e) => {
        if (e.target.value === "all") {
            setNewArr(length)
        } else {
            const newDdd = newArr.filter(item => item.species === e.target.value);
            setNewArr(newDdd)
        }
    }

    const filterInputAlive = (e) => {
            const newDdd = newArr.filter(item => item.status === e.target.value);
            setNewArr(newDdd);
    }

    console.log(inputValue)

    return (
        <div className="char">
             <div className="inputs">
                <h3>Sorted by:</h3>
                <div><input type="radio" value="all" name="person" onChange={(e) => filterInputPerson(e)}/> All</div>
                <div><input type="radio" value="Human" name="person" onClick={(e) => filterInputPerson(e)} /> Human</div>
                <div><input type="radio" value="Alien" name="person" onClick={(e) => filterInputPerson(e)} /> Alien</div>
                <div><input type="radio" value="Alive" name="person" onClick={(e) => filterInputAlive(e)} /> Alive</div>
                <div><input type="radio" value="Dead" name="person" onClick={(e) => filterInputAlive(e)} /> Dead</div>
                <div><input type="radio" value="unknown" name="person" onClick={(e) => filterInputAlive(e)} /> Unknown</div>
            </div>
            <div className="character">
                <Posts openPopup={openPopup} posts={currentPosts} />
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
            {char ? (
                <Modal
                    isOpen={modalIsOpen}>
                        <div className="moda">
                            <img src={char.image}/>
                            <h2>{char.name}</h2>
                            <p>Gender: {char.gender}</p>
                            <p>Species: {char.species}</p>
                            <p>Status: {char.status}</p>
                            <button
                                type="button"
                                onClick={() => setModalIsOpen(false)}
                                className="btn btn-outline-secondary">Close</button>
                        </div>
                </Modal>
            ) : ""}
        </div>
    )
}

export default Characters;

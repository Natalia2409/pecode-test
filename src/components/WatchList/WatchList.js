import React, { useState } from "react";
import AppHeader from "./AppHeader";
import SearchPannel from "./SearchPannel";
import PostStatusFilter from "./PostStatusFilter";
import PostList from "./PostList";
import PostAddForm from "./PostAddForm";

const WatchList = () => {
    const start = JSON.parse(localStorage.getItem("newArr"));

    const [datas, setDatas] = useState(start ? start : []);
    const [idd, setIdd] = useState(0);
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("all");

    const deleteItem = (id) => {
        const index = datas.findIndex(elem => elem.id === id);
        const before = datas.slice(0, index);
        const after = datas.slice(index + 1);
        const newArr = [...before, ...after];
        localStorage.setItem("newArr", JSON.stringify(newArr));
        setDatas(newArr)
    }

    const addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: idd
        }
        const newArr = [...datas, newItem];
        setDatas(newArr);
        localStorage.setItem("newArr", JSON.stringify(newArr));
        setIdd(idd+1);
    }

    const onToggleImportant = (id) => {
        const index = datas.findIndex(elem => elem.id === id);
        const old = datas[index];
        const newItem = {...old, important: !old.important};
        const newArr = [...datas.slice(0, index), newItem, ...datas.slice(index + 1)]
        localStorage.setItem("newArr", JSON.stringify(newArr));
        console.log("Hello")
        setDatas(newArr);
    }

    const onToggleLiked = (id) => {
        const index = datas.findIndex(elem => elem.id === id);
        const old = datas[index];
        const newItem = {...old, like: !old.like};
        const newArr = [...datas.slice(0, index), newItem, ...datas.slice(index + 1)];
        localStorage.setItem("newArr", JSON.stringify(newArr));
        setDatas(newArr);
    }

    const searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    };

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterPost = (items, filter) => {
        if (filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }

    const liked = datas.filter(item => item.like).length;
    const allPosts = datas.length;

    const visiblePosts = filterPost(searchPost(datas, term), filter);

    return (
        <div className="watch-list">
            <AppHeader
                liked={liked}
                allPosts={allPosts}
            />
            <div className="search-pannel d-flex">
                <SearchPannel onUpdateSearches={onUpdateSearch} />
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={onFilterSelect} />
            </div>
            <PostList
                onToggleImportant={onToggleImportant}
                onToggleLiked={onToggleLiked}
                onDelete={deleteItem}
                posts={visiblePosts} />
            <PostAddForm onAdd={addItem} />
        </div>
    )
}

export default WatchList;
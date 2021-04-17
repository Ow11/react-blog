import React, {useEffect, useState} from "react";
import "./admin-article-list.css";
import {Header} from "../../components/header";
import { articles } from "../article-list/feed-mock";
import * as SVG from "../../components/utils/svgs";


export const AdminArticleList = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [arts, setArts] = useState(articles);

    const sortUpTitle = () => {
        const res = [...articles].sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        setArts(res);
    }

    const sortDownTitle = () => {
        const res = [...articles].sort((a, b) => {
            return b.title.localeCompare(a.title);
        });
        setArts(res);
    }

    const sortUpPerex = () => {
        const res = [...articles].sort((a, b) => {
            return a.perex.localeCompare(b.perex);
        });
        setArts(res);
    }

    const sortDownPerex = () => {
        const res = [...articles].sort((a, b) => {
            return b.perex.localeCompare(a.perex);
        });
        setArts(res);
    }

    const sortUpAuthor = () => {
        const res = [...articles].sort((a, b) => {
            return a.author.localeCompare(b.author);
        });
        setArts(res);
    }

    const sortDownAuthor = () => {
        const res = [...articles].sort((a, b) => {
            return b.author.localeCompare(a.author);
        });
        setArts(res);
    }

    const sortUpComments = () => {
        const res = [...articles].sort((a, b) => {
            return a.comments - b.comments;
        });
        setArts(res);
    }

    const sortDownComments = () => {
        const res = [...articles].sort((a, b) => {
            return b.comments - a.comments;
        });
        setArts(res);
    }

    return (
        <>
            <Header />
            <div className="container admin-article-list">
                <div className="action-title">
                    <h1>My articles</h1>
                    <button className="btn-blue" >Create new article</button>
                </div>
                <table>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>
                            Article title
                            <span className="sortUnion">
                                <button onClick={sortUpTitle}>{ SVG.sortUp }</button>
                                <button onClick={sortDownTitle}>{ SVG.sortDown }</button>
                            </span>
                        </th>
                        <th>
                            Perex
                            <span className="sortUnion">
                                <button onClick={sortUpPerex}>{ SVG.sortUp }</button>
                                <button onClick={sortDownPerex}>{ SVG.sortDown }</button>
                            </span>
                        </th>
                        <th>
                            Author
                            <span className="sortUnion">
                                <button onClick={sortUpAuthor}>{ SVG.sortUp }</button>
                                <button onClick={sortDownAuthor}>{ SVG.sortDown }</button>
                            </span>
                        </th>
                        <th>
                            # of comments
                            <span className="sortUnion">
                                <button onClick={sortUpComments}>{ SVG.sortUp }</button>
                                <button onClick={sortDownComments}>{ SVG.sortDown }</button>
                            </span>
                        </th>
                        <th>Actions</th>
                    </tr>
                    {arts.map((article, key) => {
                        return (
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>{(article.title.length > 31) ? article.title.slice(0, 29) + "..." : article.title}</td>
                                <td>{(article.perex.length > 55) ? article.perex.slice(0, 53) + "..." : article.perex}</td>
                                <td>{article.author}</td>
                                <td>{article.comments}</td>
                                <td>
                                    <button>{ SVG.editPen }</button>
                                    <button>{ SVG.trashBin }</button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
}
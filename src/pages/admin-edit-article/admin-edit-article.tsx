import React from 'react';
import {Header} from "../../components/header";
import {EditArticle} from "../../components/edit-article";
import {articleDetailDto} from "../article-detail/article-detail-mock";

export const AdminEditArticle = (props: any) => {
    const article = articleDetailDto;       // Must be taken from the props

    return (
        <>
            <Header />
            <div className="container admin-new-article">
                <div className="action-title">
                    <h1>Edit article</h1>
                    <button className="btn-blue" >Publish Article</button>
                </div>
                <EditArticle article={article} />
            </div>
        </>
    );
}
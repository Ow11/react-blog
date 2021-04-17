import React from "react";
import {Header} from "../../components/header";
import {EditArticle} from "../../components/edit-article";

export const AdminNewArticle = () => {
    return (
        <>
            <Header />
            <div className="container admin-new-article">
                <div className="action-title">
                    <h1>Create new article</h1>
                    <button className="btn-blue" >Publish Article</button>
                </div>
                <EditArticle />
            </div>
        </>
    );
}
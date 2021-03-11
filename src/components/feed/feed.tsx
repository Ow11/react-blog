import React from "react"
import "./feed.css";
import {ArticleCard} from "../article-card";

export const Feed = () => {
    return(
        <div className="container">
            <h1>
                Recent articles
            </h1>
            <main>
                <ArticleCard />
                <ArticleCard />
            </main>
        </div>
    );
}
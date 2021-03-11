import React from "react"
import "./feed.css";
import {ArticleCard} from "../article-card";
import {articles} from "./feed-mock";

export const Feed = () => {
    return(
        <div className="container">
            <h1>
                Recent articles
            </h1>
            <main>
                <ArticleCard article={articles[0]} />
                <ArticleCard article={articles[1]} />
            </main>
        </div>
    );
}
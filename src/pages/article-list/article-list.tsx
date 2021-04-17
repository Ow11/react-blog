import React from "react";
import {Header} from "../../components/header";
import "./article-list.css";
import {articles} from "./feed-mock";
import {ArticleDto} from "../../dto/article-dto";
import {AuthorDateDto} from "../../dto/author-date-dto";
import {AuthorDate} from "../../components/author-date";
import {Link} from "react-router-dom";

const ArticleCard = (props: any) => {
    const articleDto: ArticleDto = props.article;
    const authorDateDto: AuthorDateDto = {
        author: articleDto.author,
        date: articleDto.createdAt,
    }
    return (
        <div className="article-card">
            <img src="../../images/article-image.jpg" alt="article's illustration"/>
            <div>
                <h4>{articleDto.title}</h4>
                <AuthorDate authorDate={authorDateDto} />
                <p>
                    {articleDto.perex}
                </p>
                <Link className="link--blue" to="#">
                    Read whole article
                </Link>
                <span>{articleDto.comments} comments</span>
            </div>
        </div>
    );
}

const Feed = () => {
    let articleCards: any[] = [];
    articles.forEach((article, key) => {
        articleCards.push(<ArticleCard article={article} />);
    })
    return (<>
        {articleCards}
    </>);
}

export const ArticleList = () => {
    return (
        <>
            <Header />
            <div className="container article-list">
                <h1>
                    Recent articles
                </h1>
                <main>
                    <Feed />
                </main>
            </div>
        </>
    );
}
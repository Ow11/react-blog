import React from "react";
import { Link } from "react-router-dom";
import "./article-card.css"
import {ArticleDto} from "../../dto/article-dto";
import {DateFormat} from "../utils/date-foramt";

export const ArticleCard = (props: any) => {
    const articleDto: ArticleDto = props.article;
    return (
        <div className="article-card">
            <img src="../../images/article-image.jpg" alt="article's illustration"/>
            <div>
                <h4>{articleDto.title}</h4>
                <span>{articleDto.author} dot {DateFormat(articleDto.createdAt)}</span>
                <p>
                    {articleDto.perex}
                </p>
                <span>
                    <Link to="">
                        Read whole article
                    </Link>
                    {articleDto.comments} comments
                </span>
            </div>
        </div>
    );
}
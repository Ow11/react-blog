import React from "react";
import { Link } from "react-router-dom";
import "./article-card.css"
import {ArticleDto} from "../../dto/article-dto";

export const ArticleCard = (articleDto: ArticleDto) => {
    return (
        <div className="article-card">
            <img src="../../images/article-image.jpg" alt="article's illustration"/>
            <div>
                <h4>Why Do Cats Have Whiskers</h4>
                <span>Author's name dot Date</span>
                <p>
                    Lorem ipsum
                </p>
                <span>
                    <Link to="">
                        Read whole article
                    </Link>
                    N comments
                </span>
            </div>
        </div>
    );
}
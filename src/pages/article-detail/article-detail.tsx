import React from "react";
import "./article-detail.css";
import {Header} from "../../components/header";
import {articleDetailDto} from "./article-detail-mock";
import {ArticleDetailDto} from "../../dto/article-detail-dto";
import {AuthorDate} from "../../components/author-date";
import {ImageDto} from "../../dto/image-dto";
import ReactMarkdown from "react-markdown";
import {ArticleRelatedDto} from "../../dto/article-related.dto";
import {articles} from "../article-list/feed-mock";
import * as SVG from "../../components/utils/svgs"
import {userMock} from "../../components/utils/mocks";

const getArticleDetailDto = (articleId: string) => {
    return articleDetailDto;
}

const getRelatedArticles = (id: string) => {
    const result: ArticleRelatedDto[] = [];

    articles.forEach((art) => {
        if (id === art.articleId)
            return;
        const res: ArticleRelatedDto = {
            title: art.title,
            perex: art.perex,
        }
        result.push(res);
    })

    return result;
}

const getImageDto = (imageId: string) => {
    return {
        src: "../../images/image1.jpg",
        alt: "article's illustration",
    };
}

const getTimeDifference = (postedAt: string) => {
    let delta = Date.now() - (new Date(postedAt).getTime());
    delta = Math.round(delta / 1000);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const avgMonth = day * 30;
    const year = day * 365;

    if (delta < hour) return `${Math.round(delta / minute)} minutes`;

    if (delta < day) return `${Math.round(delta / hour)} hours`;

    if (delta < week) return `${Math.round(delta / day)} days`;

    if (delta < avgMonth) return `${Math.round(delta / week)} weeks`;

    if (delta < year) return `${Math.round(delta / avgMonth)} months`;

    return `${Math.round(delta / year)} years`;
}

const NewComment = (props: any) => {
    const avatar = props.user.avatar;

    return (
        <div className="new-comment">
            <img src={avatar} alt="avatar" />
            <input placeholder="Join the discussion"/>
        </div>
    );
}

export const ArticleDetail = () => {
    const {
        articleId,
        title,
        imageId,
        createdAt,
        content,
        author,
        comments,
    }: ArticleDetailDto = getArticleDetailDto("1");

    const image: ImageDto = getImageDto(imageId);

    const authorDateDto = {author, date: createdAt}

    return (
        <>
            <Header />
            <div className="container article-detail">
                <div className="article-detail--wrapper">
                    <main>
                        <h1>{title}</h1>
                        <AuthorDate authorDate={authorDateDto}/>
                        <img src={image.src} alt={image.alt} />
                        <article>
                            <ReactMarkdown source={content} />
                        </article>
                    </main>

                    {/* RELATED ARTICLES SECTION */}

                    <aside>
                        <h4>Related articles</h4>

                        { getRelatedArticles(articleId).map((art, key) => {
                            return (
                                <>
                                    <h6 key={key}>{art.title}</h6>
                                    <p key={key}>{art.perex.slice(0, 154)}...</p>
                                </>
                            );
                        }) }

                    </aside>
                </div>

                {/* COMMENTS SECTION */}

                <div className="comments">
                    <hr />
                    <h4>Comments ({comments.length})</h4>
                    <NewComment user={userMock} />

                    { comments.map((comment, key) => {
                        return (
                            <div key={key} className="comment-card">
                                <img src="" alt="avatar" />
                                <div className="comment-card--body">
                                    <span>{comment.author}</span><span>{getTimeDifference(comment.postedAt)} ago</span>
                                    <p>{comment.content}</p>
                                    <div className="rating">
                                        <span className="rating">{ comment.score > 0 ? "+" : "" }{comment.score}</span>
                                        <button className="btn-rating-up">{SVG.chevronUp}</button>
                                        <button className="btn-rating-down">{SVG.chevronDown}</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }) }

                </div>
            </div>
        </>
    );
}
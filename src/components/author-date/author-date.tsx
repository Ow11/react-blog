import React from "react";
import {DateFormat} from "../utils/date-foramt";
import {AuthorDateDto} from "../../dto/author-date-dto";
import "./author-date.css";

export const AuthorDate = (params: any) => {
    const authorDateDto: AuthorDateDto = params.authorDate;
    return (<>
            <span className="author-date">{authorDateDto.author}</span>
            <span className="author-date">•</span>
            <span className="author-date">{DateFormat(authorDateDto.date)}</span>
        </>
    );
}
import {CommentDto} from "./comment-dto";

export class ArticleDetailDto {
    readonly articleId: string = "";
    readonly title: string = "";
    readonly imageId: string = "";
    readonly createdAt: string = "";
    readonly content: string = "";
    readonly author: string = "";
    readonly comments: CommentDto[] = [];
}
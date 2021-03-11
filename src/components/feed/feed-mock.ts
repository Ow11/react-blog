import {ArticleDto} from "../../dto/article-dto";

export const articles: ArticleDto[] = [
    {
        articleId: "1",
        title: "Why Do Cats Have Whiskers",
        perex: "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
        imageId: "1",
        createdAt: new Date(2017, 2, 13).toString(),
        author: "Elisabeth Strain",
        comments: 4,
    },
    {
        articleId: "2",
        title: "Wet vs. Dry Cat Food: Which is Better?",
        perex: "If you aren’t sure how much wet food you should feed your cat, Purina’s expert nutritionists can help. Plus, they offer guidance on food safety and provide serving ideas your cat will love.",
        imageId: "2",
        createdAt: new Date(2016, 7, 16).toString(),
        author: "Elisabeth Strain",
        comments: 0,
    }
]
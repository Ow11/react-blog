import {ArticleDto} from "../../dto/article-dto";

export const articles: ArticleDto[] = [
    {
        articleId: "1",
        title: "Why Do Cats Have Whiskers",
        perex: "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
        imageId: "1",
        createdAt: new Date(2017, 2, 13).toISOString(),
        author: "Elisabeth Strain",
        comments: 4,
    },
    {
        articleId: "2",
        title: "Wet vs. Dry Cat Food: Which is Better?",
        perex: "If you aren’t sure how much wet food you should feed your cat, Purina’s expert nutritionists can help. Plus, they offer guidance on food safety and provide serving ideas your cat will love.",
        imageId: "2",
        createdAt: new Date(2016, 7, 16).toISOString(),
        author: "Elisabeth Strain",
        comments: 0,
    },
    {
        articleId: "3",
        title: "How Much Wet Food Should I Feed My Cat?",
        perex: "Some cat owners prefer to feed their cats wet food. Others prefer dry kibble. Trying to decide between wet vs. dry cat food? Find out what our experts recommend when it comes to feeding your cat.",
        imageId: "3",
        createdAt: new Date(2019, 6, 25).toISOString(),
        author: "Elisabeth Strain",
        comments: 12,
    },
    {
        articleId: "4",
        title: "Do Cats Drink Water? Cat Hydration & Dehydration Prevention",
        perex: "Do cats drink water? Yes, like humans and many other animals, cats need water to survive. Many cats don’t drink as much as they should, though. Find out why they need water and how to get your own kitty to drink more.",
        imageId: "4",
        createdAt: new Date(2017, 3, 17).toISOString(),
        author: "Elisabeth Strain",
        comments: 4,
    },
    {
        articleId: "5",
        title: "What Is the Difference Between Natural and Organic Cat Food?",
        perex: "If you prefer your own diet to be natural or organic, you’re probably considering feeding your cat a natural or organic cat food, too. What’s the difference between the two, though, and how do you decide which is right for your cat? Find out here.",
        imageId: "5",
        createdAt: new Date(2016, 1, 3).toISOString(),
        author: "Elisabeth Strain",
        comments: 3,
    }
]
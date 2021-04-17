import {ArticleDetailDto} from "../../dto/article-detail-dto";
import {CommentDto} from "../../dto/comment-dto";

const comments: CommentDto[] = [
    {
        commentId: "1",
        articleId: "1",
        author: "Lily Hawkins",
        content: "You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York and his head is meowing in Los Angeles. Do you understand this? And radio operates exactly the same way: you send signals here, they receive them there. The only difference is that there is no cat.",
        postedAt: new Date(2017, 2, 13).toISOString(),
        score: 3,
    },
    {
        commentId: "2",
        articleId: "1",
        author: "Lily Hawkins",
        content: "You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York and his head is meowing in Los Angeles. Do you understand this? And radio operates exactly the same way: you send signals here, they receive them there. The only difference is that there is no cat.",
        postedAt: new Date(2017, 2, 13).toISOString(),
        score: 3,
    },
    {
        commentId: "3",
        articleId: "1",
        author: "Lily Hawkins",
        content: "You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York and his head is meowing in Los Angeles. Do you understand this? And radio operates exactly the same way: you send signals here, they receive them there. The only difference is that there is no cat.",
        postedAt: new Date(2017, 2, 13).toISOString(),
        score: 3,
    },
]

export const articleDetailDto: ArticleDetailDto = {
    articleId: "1",
    title: "Why Do Cats Have Whiskers?",
    imageId: "1",
    createdAt: new Date(2017, 2, 13).toISOString(),
    content: "Men might grow a beard or maintain a mustache just for extra style points, but the facial hair of the cat has nothing to do with fashion. A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators.\n" +
        "\n" +
        "Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs. At the root of each of these long, stiff hairs is a follicle loaded with nerves.\n" +
        "\n" +
        "By brushing its whiskers against an object, a cat can detect the precise location, size and texture of the object, even in the dark. This feature proves particularly useful for a cat trying to gauge whether it can fit into a tight space. Whiskers also detect changes in air currents, helping cats detect approaching dangers. \n" +
        "\n" +
        "Whiskers not only make cats aware of their surroundings, but can also provide humans with some insight into their pet's state of mind. For example, a set of taut whiskers, pulled back across the face, is a good indication that Kitty feels threatened, while relaxed whiskers, pointing away from the face, indicate a content cat.\n" +
        "\n" +
        "Of course, cats aren't the only mammals with whiskers. Most mammalian species, including primates, are equipped with these extrasensory receptors. Biologists think mammals developed whiskers because they needed help sensing their environments at night.\n" +
        "\n" +
        "The first small mammals shared the world with dinosaurs and had to adapt to hunting nocturnally, when their predators were less active. Whiskers helped these hungry animals find food and navigate dark terrain. This evolutionary adaptation also helps to explain why the whiskers of many nocturnal or aquatic carnivores — like rats, seals and walruses — are so prominent.",
    author: "Elisabeth Strain",
    comments: comments,
}
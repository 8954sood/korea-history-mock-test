
export class ProblemModel {

    // id: Int
    // title: String
    // image: Optional<String>
    // detail: Optional<String>
    // select: List<String>
    // answer: Int
    // score: Int
    

    constructor(
        id,
        title,
        detail,
        image,
        select,
        answer,
        score,
    ) {
        this.id = id;
        this.title = title;
        this.select = select;
        this.detail = detail;
        this.image = image;
        this.answer = answer;
        this.score = score;
    }
}
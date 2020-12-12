import {Answer as Answer} from '../models/Answer';

export function generateAllAnswers() : Answer[] {
    let allAnswers: Answer[] = [
        new Answer(0, "否"),
        new Answer(1, "是"),
        new Answer(2, "xue ding le")
    ]
    return allAnswers;
}

import {Answer as Answer} from '../models/Answer';

export function generateAllAnswers() : Answer[] {
    let allAnswers: Answer[] = [
        new Answer(0, "否"),
        new Answer(1, "是"),
        new Answer(2, "自己选的路，跪着也要把它走完")
    ]
    return allAnswers;
}

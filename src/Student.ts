import {ObjOfSchool} from "./AbsClass/ObjOfSchool";

export class Student extends ObjOfSchool {
    score: number;

    constructor(id: string,
                name: string,
                age: number,
                faculty: string,
                score: number) {
        super(id, name, age, faculty);
        this.score = score;
    }
}
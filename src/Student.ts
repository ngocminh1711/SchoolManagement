import {Teacher} from "./Teacher";

export class Student extends Teacher {

        constructor(id: string, name: string, age: number, group: string) {
            super(id, name, age, group);
        }
}
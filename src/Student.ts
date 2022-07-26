
import {ObjOfSchool} from "./AbsClass/ObjOfSchool";

export class Student extends ObjOfSchool {

        constructor(id: string, name: string, age: number, faculty: string){
            super(id, name, age, faculty);
        }
}
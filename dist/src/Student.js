"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const ObjOfSchool_1 = require("./AbsClass/ObjOfSchool");
class Student extends ObjOfSchool_1.ObjOfSchool {
    constructor(id, name, age, faculty, score) {
        super(id, name, age, faculty);
        this.score = score;
    }
}
exports.Student = Student;

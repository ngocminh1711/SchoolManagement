"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Teacher_1 = require("./Teacher");
class Student extends Teacher_1.Teacher {
    constructor(id, name, age, group) {
        super(id, name, age, group);
    }
}
exports.Student = Student;

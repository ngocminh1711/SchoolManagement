"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const ObjOfSchool_1 = require("./AbsClass/ObjOfSchool");
class Teacher extends ObjOfSchool_1.ObjOfSchool {
    constructor(id, name, age, faculty, workday) {
        super(id, name, age, faculty);
        this._workday = workday;
    }
    get workday() {
        return this._workday;
    }
    set workday(value) {
        this._workday = value;
    }
}
exports.Teacher = Teacher;

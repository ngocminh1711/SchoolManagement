"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(id, name, age, faculty, workday) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._faculty = faculty;
        this._workday = workday;
    }
    get workday() {
        return this._workday;
    }
    set workday(value) {
        this._workday = value;
    }
    get faculty() {
        return this._faculty;
    }
    set faculty(value) {
        this._faculty = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
exports.Teacher = Teacher;

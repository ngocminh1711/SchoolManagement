"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faculty = void 0;
class Faculty {
    constructor(name, score) {
        this._name = name;
        this._score = score;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
}
exports.Faculty = Faculty;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WageOfTeacher = void 0;
class WageOfTeacher {
    constructor(wage, name) {
        this._wageValue = wage;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get wageValue() {
        return this._wageValue;
    }
    set wageValue(value) {
        this._wageValue = value;
    }
}
exports.WageOfTeacher = WageOfTeacher;

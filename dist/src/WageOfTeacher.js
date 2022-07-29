"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WageOfTeacher = void 0;
class WageOfTeacher {
    constructor(wageCNTT, wageKTQD, wageDulich, wageKeToan) {
        this._wageCNTT = wageCNTT;
        this._wageKTQD = wageKTQD;
        this._wageKeToan = wageKeToan;
        this._wageDulich = wageDulich;
    }
    get wageDulich() {
        return this._wageDulich;
    }
    set wageDulich(value) {
        this._wageDulich = value;
    }
    get wageKeToan() {
        return this._wageKeToan;
    }
    set wageKeToan(value) {
        this._wageKeToan = value;
    }
    get wageCNTT() {
        return this._wageCNTT;
    }
    set wageCNTT(value) {
        this._wageCNTT = value;
    }
    get wageKTQD() {
        return this._wageKTQD;
    }
    set wageKTQD(value) {
        this._wageKTQD = value;
    }
}
exports.WageOfTeacher = WageOfTeacher;

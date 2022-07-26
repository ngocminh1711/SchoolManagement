"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WageOfTeacher = void 0;
class WageOfTeacher {
    constructor(wageCNTT, wageKTQD) {
        this._wageCNTT = wageCNTT;
        this._wageKTQD = wageKTQD;
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

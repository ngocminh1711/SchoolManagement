export class WageOfTeacher {
    private _wageCNTT: number;
    private _wageKTQD: number;
    constructor(wageCNTT: number,wageKTQD: number) {
        this._wageCNTT = wageCNTT;
        this._wageKTQD = wageKTQD;
    }


    get wageCNTT(): number {
        return this._wageCNTT;
    }

    set wageCNTT(value: number) {
        this._wageCNTT = value;
    }

    get wageKTQD(): number {
        return this._wageKTQD;
    }

    set wageKTQD(value: number) {
        this._wageKTQD = value;
    }
}

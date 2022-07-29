export class WageOfTeacher {
    private _wageCNTT: number;
    private _wageKTQD: number;
    private _wageDulich: number;
    private _wageKeToan: number;
    constructor(wageCNTT: number,wageKTQD: number,wageDulich: number,wageKeToan: number) {
        this._wageCNTT = wageCNTT;
        this._wageKTQD = wageKTQD;
        this._wageKeToan =wageKeToan;
        this._wageDulich =wageDulich;
    }


    get wageDulich(): number {
        return this._wageDulich;
    }

    set wageDulich(value: number) {
        this._wageDulich = value;
    }

    get wageKeToan(): number {
        return this._wageKeToan;
    }

    set wageKeToan(value: number) {
        this._wageKeToan = value;
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

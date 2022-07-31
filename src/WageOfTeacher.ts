export class WageOfTeacher {
    private _wageValue: number;
    private _name: string;


    constructor(wage: number,name: string) {
        this._wageValue = wage;
        this._name = name;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get wageValue(): number {
        return this._wageValue;
    }

    set wageValue(value: number) {
        this._wageValue = value;
    }


}

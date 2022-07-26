import {ObjOfSchool} from "./AbsClass/ObjOfSchool";


export class Teacher extends ObjOfSchool{

    private _workday: number;
    constructor(id: string, name: string, age: number, faculty: string, workday: number) {
        super(id, name, age, faculty);
        this._workday = workday;
    }


    get workday(): number {
        return this._workday;
    }

    set workday(value: number) {
        this._workday = value;
    }
}
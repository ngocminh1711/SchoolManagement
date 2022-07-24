
export class Teacher {
    private _id: string
    private _name: string;
    private _age: number;
    private _faculty: string;
    private _workday: number;
    constructor(id: string, name: string, age: number, faculty: string, workday: number) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._faculty = faculty;
        this._workday = workday
    }


    get workday(): number {
        return this._workday;
    }

    set workday(value: number) {
        this._workday = value;
    }

    get faculty(): string {
        return this._faculty;
    }

    set faculty(value: string) {
        this._faculty = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}
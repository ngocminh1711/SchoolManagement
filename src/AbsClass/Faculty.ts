export class Faculty {
    private _name: string;
    private _score?: number | undefined;
    constructor(name: string, score?: number | undefined) {
        this._name = name;
        this._score = score;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get score(): number | undefined {
        return this._score;
    }

    set score(value: number | undefined) {
        this._score = value;
    }
}
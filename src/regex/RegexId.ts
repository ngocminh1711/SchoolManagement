export class RegexId {
    private regexId: RegExp = /^[a-zA-Z0-9]{4,8}$/;
    checkRegexId(regexId: string): boolean {
        return this.regexId.test(regexId)
    }
}
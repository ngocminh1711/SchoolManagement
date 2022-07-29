"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexPassword = void 0;
class RegexPassword {
    constructor() {
        this.regexPassword = /^[a-zA-Z0-9]{4,8}$/;
    }
    checkRegexPassword(regexPassword) {
        return this.regexPassword.test(regexPassword);
    }
}
exports.RegexPassword = RegexPassword;

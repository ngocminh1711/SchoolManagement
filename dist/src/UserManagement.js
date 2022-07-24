"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
class UserManagement {
    constructor() {
        this.admins = [];
        this.users = [];
    }
    login() {
        return this.admins;
    }
    addAdmin(admin) {
        return this.admins.push(admin);
    }
}
exports.UserManagement = UserManagement;

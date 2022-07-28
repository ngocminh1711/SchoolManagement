"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
class UserManagement {
    constructor() {
        this.admins = [];
        this.users = [];
    }
    showAccountAdmin() {
        return this.admins;
    }
    addAdmin(admin) {
        return this.admins.push(admin);
    }
    updateAdmin(id, newId) {
        this.admins.forEach((admin, index) => {
            if (admin.id === id) {
                this.admins[index] = newId;
            }
        });
        return this.admins;
    }
    checkAccount(id, password) {
        let flag = false;
        this.admins.forEach((admin, index) => {
            if (admin.id == id && admin.password == password) {
                return flag = true;
            }
        });
        return flag;
    }
}
exports.UserManagement = UserManagement;

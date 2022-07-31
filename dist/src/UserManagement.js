"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
class UserManagement {
    constructor() {
        this.admins = [];
        this.users = [];
    }
    showAccountAdmin() {
        console.log(this.admins);
    }
    addAdmin(admin) {
        return this.admins.push(admin);
    }
    addUser(user) {
        return this.users.push(user);
    }
    updateAdminId(id, newId) {
        this.admins.forEach((admin, index) => {
            if (admin.id == id) {
                admin.id = newId;
            }
            return admin.id;
        });
    }
    updateAdminPassword(password, newPassword) {
        this.admins.forEach((admin, index) => {
            if (admin.password !== password) {
                console.log('Mật khẩu cũ không đúng, mời nhập lại mật khẩu!');
            }
            else if (admin.password == password) {
                admin.password = newPassword;
            }
        });
    }
    updateUserPassword(password, newPassword) {
        this.users.forEach((user, index) => {
            if (user.password !== password) {
                console.log('Mật khẩu cũ không đúng, mời nhập lại mật khẩu!');
            }
            else if (user.password == password) {
                user.password = newPassword;
            }
        });
    }
    checkAccountAdmin(id, password) {
        let flag = false;
        this.admins.forEach((admin, index) => {
            if (admin.id == id && admin.password == password) {
                return flag = true;
            }
        });
        return flag;
    }
    checkAccountUser(id, password) {
        let flag = false;
        this.users.forEach((user, index) => {
            if (user.id == id && user.password == password) {
                return flag = true;
            }
        });
        return flag;
    }
}
exports.UserManagement = UserManagement;

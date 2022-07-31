import {User} from "./User";
import {Admin} from "./Admin";

export class UserManagement {
    admins: Admin[] = [];
    users: User[] = [];

    showAccountAdmin() {
        console.log(this.admins);
    }

    addAdmin(admin: Admin) {
        return this.admins.push(admin);
    }
    addUser(user: User) {
        return this.users.push(user);
    }

    updateAdminId(id: string, newId: string) {
        this.admins.forEach((admin, index) => {
            if (admin.id == id) {
                admin.id = newId;
            }
            return admin.id;
        })
    }
    updateAdminPassword(password: string, newPassword: string) {
        this.admins.forEach((admin, index) => {
            if (admin.password !== password) {
                console.log ('Mật khẩu cũ không đúng, mời nhập lại mật khẩu!');
            }
            else if (admin.password == password) {
                admin.password = newPassword;
            }
        })
    }
    updateUserPassword(password: string, newPassword: string) {
        this.users.forEach((user, index) => {
            if (user.password !== password) {
                console.log ('Mật khẩu cũ không đúng, mời nhập lại mật khẩu!');
            }
            else if (user.password == password) {
                user.password = newPassword;
            }
        })
    }
    checkAccountAdmin(id: string, password: string): boolean {
        let flag = false;
        this.admins.forEach((admin, index) => {
            if (admin.id == id && admin.password == password) {
                return flag = true;
            }
        })
        return flag;
    }
    checkAccountUser(id: string, password: string): boolean {
        let flag = false;
        this.users.forEach((user,index) => {
            if (user.id == id && user.password == password) {
                return flag = true;
            }
        })
        return flag;
    }
}



import {User} from "./User";
import {Admin} from "./Admin";

export class UserManagement {
    admins: Admin[] = [];
    users: User[] = [];

    showAccountAdmin() {
        return this.admins;
    }

    addAdmin(admin: Admin) {
        return this.admins.push(admin);
    }

    updateAdmin(id: string, newId: Admin) {
        this.admins.forEach((admin, index) => {
            if (admin.id === id) {
                this.admins[index] = newId;
            }
        })
        return this.admins;
    }

    checkAccount(id: string, password: string): boolean {
        let flag = false;
        this.admins.forEach((admin, index) => {
            if (admin.id == id && admin.password == password) {
                return flag = true;
            }
        })
        return flag;
    }
}



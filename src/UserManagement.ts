import {User} from "./User";
import {Admin} from "./Admin";

export class UserManagement {
    admins: Admin[] = [];
    users: User[] = [];

    login() {
        return this.admins;
    }
    addAdmin(admin: Admin) {
        return this.admins.push(admin);
    }
}



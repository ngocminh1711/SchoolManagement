import {UserManagement} from "./src/UserManagement"
import {Admin} from "./src/Admin";
import * as rl from "readline-sync"
import {User} from "./src/User";
import {SchoolManagement} from "./src/SchoolManagement";
import {Student} from "./src/Student";
import {Teacher} from "./src/Teacher";
import {WageOfTeacher} from "./src/WageOfTeacher";
import {RegexId} from "./src/regex/RegexId";
import {RegexPassword} from "./src/regex/RegexPassword";
import {enumAdmin, enumSignIn, enumUser, searchOfSearch, enumStudent, enumTeacher} from "./src/enum";

let userManagement = new UserManagement();
let schoolManagement = new SchoolManagement();
let admin = new Admin('admin', 'admin');
userManagement.addAdmin(admin);
let user = new User('user', 'user');
userManagement.addUser(user);
let student1 = new Student('A05', 'Ngoc', 29, 'Quan Tri Kinh Doanh', 6);
let student2 = new Student('A01', 'Minh', 25, 'Cong Nghe Thong Tin', 9);
let teacher1 = new Teacher('T01', 'Hoang Dao Thuy', 30, 'Quan Tri Kinh Doanh', 28);
let teacher2 = new Teacher('T02', 'Vu Minh Phuong', 35, 'Cong Nghe Thong Tin', 26);
let teacher3 = new Teacher('T03', 'Vu Trong Phung', 32, 'Cong Nghe Thong Tin', 25);
let wageCNTT = new WageOfTeacher(300000, 'Cong Nghe Thong Tin');
let wageQTKD = new WageOfTeacher(400000, 'Quan Tri Kinh Doanh');
let wageDuLich = new WageOfTeacher(500000, 'Du Lich');
let wageKeToan = new WageOfTeacher(350000,'Ke Toan');
schoolManagement.addWage(wageKeToan);
schoolManagement.addWage(wageCNTT);
schoolManagement.addWage(wageQTKD);
schoolManagement.addWage(wageDuLich);
schoolManagement.addStudent(student1);
schoolManagement.addStudent(student2);
schoolManagement.addTeacher(teacher1);
schoolManagement.addTeacher(teacher2);
schoolManagement.addTeacher(teacher3);

let choice = -1;

function inputStudent() {
    console.log('-----Tạo Sinh Viên Mới-----');
    let idStudent = rl.question('Nhập mã sinh viên:  ');
    let nameStudent = rl.question('Nhập tên sinh viên: ');
    let ageStudent = +rl.question('Nhập tuổi sinh viên: ');
    let facutlyStudent = rl.question('Nhập tên Khoa: ');
    let scoreStudent = +rl.question('Nhập điểm: ');
    return new Student(idStudent, nameStudent, ageStudent, facutlyStudent, scoreStudent);

}

function inputTeacher() {
    let id = rl.question('Nhập mã Giáo Viên:  ');
    let name = rl.question('Nhập tên Giáo Viên: ');
    let age = +rl.question('Nhập tuổi Giáo Viên: ');
    let facutly = rl.question('Nhập tên Khoa: ');
    let workday = +rl.question('Nhập số ngày công: ')
    return new Teacher(id, name, age, facutly, workday);
}

function createNewTeacher() {
    let teacher = inputTeacher();
    schoolManagement.addTeacher(teacher);
}

function createNewStudent() {
    let student = inputStudent();
    schoolManagement.addStudent(student);
}


function menuOfStudent() {
    console.log('-----Student Management-----');
    console.log('1.Tạo mới sinh viên.');
    console.log('2.Tìm kiếm sinh viên.');
    console.log('3.Xóa sinh viên.');
    console.log('4.Sửa thông sinh viên')
    console.log('5.Xếp loại học lực.');
    console.log('0.Back');
}

function menuOfSearchStudent() {
    console.log('-----Tìm kiếm Sinh Viên-----');
    console.log('1.Tìm kiếm theo Id')
    console.log('2.Tìm kiếm theo Tên')
    console.log('3.Tìm kiếm theo tên Khoa')
    console.log('4.Back')
}

function menuOfSearchTeacher() {
    console.log('-----Tìm kiếm Giáo Viên-----');
    console.log('1.Tìm kiếm theo Id')
    console.log('2.Tìm kiếm theo Tên')
    console.log('3.Tìm kiếm theo tên Khoa')
    console.log('4.Back')
}

function menuOfTeacher() {
    console.log('-----Teacher Management-----');
    console.log('1.Tạo mới giáo viên.');
    console.log('2.Tìm kiếm giáo viên.');
    console.log('3.Xóa giáo viên.');
    console.log('4.Sửa tiền lương giáo viên.');
    console.log('5.Hiển thị danh sách lương.');
    console.log('6.Sửa thông tin giáo viên.');
    console.log('7.Back')
}

function menu() {
    console.log('-----School Management-----');
    console.log('1.Hiển thị danh sách giáo viên');
    console.log('2.Hiển thị danh sách sinh viên');
    console.log('3.Menu of Teacher');
    console.log('4.Menu of Student');
    console.log('5.Sắp xếp thông tin');
    console.log('6.Tạo mới account admin');
    console.log('7.Tạo mới account user');
    console.log('8.Thay đổi mật khẩu account admin');
    console.log('9.Back')
}


function showTeacher() {
    console.log('-----Danh sách Giáo Viên-----')
    schoolManagement.showInfoTeacher();
}

function showStudent() {
    console.log('-----Danh sách Sinh Viên-----');
    schoolManagement.showInfoStudent();
}

function searchTeacherID() {
    console.log('-----Tìm Kiếm Theo Id-----');
    let idSearchTeacher = rl.question('Nhập Id Giáo Viên: ');
    schoolManagement.searchTeacherByID(idSearchTeacher);
}

function searchTeacherName() {
    console.log('-----Tìm Kiếm Theo Tên-----');
    let nameSearchTeacher = rl.question('Nhập Tên Giáo Viên: ');
    schoolManagement.searchTeacherByName(nameSearchTeacher);
}

function searchTeacherFaculty() {
    console.log('-----Tìm Kiếm Theo Khoa-----');
    let facutlySearchTeacher = rl.question('Nhập Khoa Giáo Viên: ');
    schoolManagement.searchTeacherByFaculty(facutlySearchTeacher);
}

function searchTeacher() {
    let choiceOfSearch;
    do {
        menuOfSearchTeacher();
        choiceOfSearch = +rl.question('Mời nhập lựa chọn: ')
        switch (choiceOfSearch) {
            case searchOfSearch.SEARCHBYID:
                searchTeacherID();
                break;
            case searchOfSearch.SEARCHBYNAME:
                searchTeacherName();
                break;
            case searchOfSearch.SEARCHBYFACULTY:
                searchTeacherFaculty();
                break;
            case searchOfSearch.BACK:
                break;
        }
    } while (choiceOfSearch != searchOfSearch.BACK);

}

function deleteTeacher() {
    console.log('-----Xóa giáo viên-------');
    let nameTeacherWannaDelete = rl.question('Nhập tên giáo viên muốn sửa: ');
    schoolManagement.deleteTeacherByName(nameTeacherWannaDelete);
}

function editWage() {
    console.log('-----Sửa Lương Nhân viên-----')
    let nameOfWage = rl.question('Nhập tên khoa muốn sửa lương: ');
    let valueOfWage = +rl.question('Nhập lương/ngày muốn sửa: ');
    schoolManagement.updateWage(nameOfWage, valueOfWage);
}

function totalWageTeacher() {
    console.log('-----Lương của giáo viên-----');
    schoolManagement.totalWorkDay();
}

function editInfoTeacher() {
    console.log('-----Sửa thông Tin giáo viên-----');
    let name = rl.question('Nhập tên giáo viên cần sửa: ');
    let newTeacher = inputTeacher();
    schoolManagement.updateTeacher(name, newTeacher);
}

function menuTeacher() {
    let choiceOfTeacher;
    do {
        menuOfTeacher();
        choiceOfTeacher = +rl.question('Nhập lựa chọn: ');
        switch (choiceOfTeacher) {
            case enumTeacher.CREATETEACHER:
                console.log('-----Tạo Giáo Viên Mới-----');
                createNewTeacher();
                break;
            case enumTeacher.SEARCHTEACHER:
                searchTeacher();
                break;
            case enumTeacher.DELETEATEACHER:
                deleteTeacher();
                break;
            case enumTeacher.EDITWAGE:
                editWage();
                break;
            case enumTeacher.TOTALWAGE_TEACHER:
                totalWageTeacher();
                break;
            case enumTeacher.EDITINFOTEACHER:
                editInfoTeacher();
                break;
            case enumTeacher.BACK:
                break;
            default:
                console.log("Mời nhập lại");
        }
    }
    while (choiceOfTeacher != enumTeacher.BACK)

}

function searchStudentID() {
    console.log('-----Tìm Kiếm Theo Id-----');
    let idSearchStudent = rl.question('Nhập Id Sinh Viên: ');
    schoolManagement.searchStudentByID(idSearchStudent);
}

function searchStudentName() {
    console.log('-----Tìm Kiếm Theo Tên-----');
    let nameSearchStudent = rl.question('Nhập Tên Sinh Viên: ');
    schoolManagement.searchStudentByName(nameSearchStudent);
}

function searchStudentFaculty() {
    console.log('-----Tìm Kiếm Theo Khoa-----');
    let facutlySearchStudent = rl.question('Nhập Khoa Sinh Viên: ');
    schoolManagement.searchStudentByFaculty(facutlySearchStudent);
}

function searchStudent() {
    let choiceOfSearchStudent;
    do {
        menuOfSearchStudent();
        choiceOfSearchStudent = +rl.question('Nhập lựa chọn: ');
        switch (choiceOfSearchStudent) {
            case searchOfSearch.SEARCHBYID:
                searchStudentID();
                break;
            case searchOfSearch.SEARCHBYNAME:
                searchStudentName();
                break;
            case searchOfSearch.SEARCHBYFACULTY:
                searchStudentFaculty();
                break;
            case searchOfSearch.BACK:
                break;
        }
    }
    while (choiceOfSearchStudent != searchOfSearch.BACK);
}

function deleteStudent() {
    let nameStudentWannaDelete = rl.question('Nhập tên Sinh Viên muốn xóa: ');
    schoolManagement.deleteStudentByName(nameStudentWannaDelete);
}

function editStudent() {
    console.log('-----Sửa thông Tin sinh viên-----');
    let name = rl.question('Nhập tên sinh viên cần sửa: ');
    let newStudent = inputStudent();
    schoolManagement.updateStudent(name, newStudent);
}

function menuStudent() {
    let choiceOfStudent;
    do {
        menuOfStudent();
        choiceOfStudent = +rl.question('Nhập lựa chọn: ');
        switch (choiceOfStudent) {
            case enumStudent.CREATESTUDENT:
                createNewStudent();
                break;
            case enumStudent.SEARCHSTUDENT:
                searchStudent();
                break;
            case enumStudent.DELETEASTUDENT:
                deleteStudent();
                break;
            case enumStudent.EDITSTUDENT:
                editStudent();
                break;
            case enumStudent.RANKED:
                schoolManagement.rankedFaculty()
                break;
            case enumStudent.BACK:
                break;
        }
    }
    while (choiceOfStudent != enumStudent.BACK)


}

function sortFacutly() {
    console.log('-----Sắp xếp theo Khoa-----');
    let facutly = rl.question('Nhập Khoa muốn sắp xếp: ');
    schoolManagement.sortByFaculty(facutly);
}

function createAccount() {
    console.log('-----Tạo mới tài khoản-----');
    let regexid = new RegexId()
    let id = rl.question('Enter new ID: ');
    if (regexid.checkRegexId(id) && id !== admin.id) {
    } else {
        console.log('---Id không đúng định dạng hoặc bị trùng lặp---');
        console.log('---Xin háy chọn lại Id khác---');
        return id;
    }
    let regexpassword = new RegexPassword();
    let password = rl.question('Enter new password: ');
    if (regexpassword.checkRegexPassword(password)) {
    } else {
        console.log('---Password không đúng định dạng---');
        console.log('---Xin hãy chọn lại password khác---');
        return password;
    }
    let newAccount = new Admin(id, password);
    userManagement.addAdmin(newAccount);
}

function createUser() {
    let id = rl.question('Nhập id: ');
    let password = rl.question('Nhập password: ');
    let newUser = new User(id, password);
    userManagement.addUser(newUser);
}

function updatePasswordAdmin() {
    let password = rl.question('Nhập password cũ: ');
    let newPassword = rl.question('Nhập password mới: ');
    userManagement.updateAdminPassword(password, newPassword);
}

function updatePasswordUser() {
    let password = rl.question('Nhập password cũ: ');
    let newPassword = rl.question('Nhập password mới: ');
    userManagement.updateUserPassword(password, newPassword);
}

function menuOfAdmin() {
    let choiceOfAdmin;
    do {
        menu();
        choiceOfAdmin = +rl.question('Mời nhập lựa chọn: ');
        switch (choiceOfAdmin) {
            case enumAdmin.SHOWTEACHER:
                showTeacher();
                break;
            case enumAdmin.SHOWSTUDENT:
                showStudent();
                break;
            case enumAdmin.MENUTEACHER:
                menuTeacher();
                break;
            case enumAdmin.MENUSTUDENT:
                menuStudent();
                break;
            case enumAdmin.SORTFACUTLY:
                sortFacutly();
                break;
            case enumAdmin.CREATEACCOUNT:
                createAccount();
                break;
            case enumAdmin.CREATEUSER:
                console.log('-----Tạo Tài Khoản User-----');
                createUser();
                break;
            case enumAdmin.UPDATEPASSWORD:
                updatePasswordAdmin();
                break;
            case enumAdmin.EXIT:
                break;
        }
    } while (choiceOfAdmin != enumAdmin.EXIT)

}

function menuUser() {
    console.log('1.Hiển thị danh sách Giáo Viên');
    console.log('2.Hiển thị danh sách Sinh Viên');
    console.log('3.Tìm kiếm sinh viên.');
    console.log('4.Tìm kiếm giáo viên');
    console.log('5.Thay đổi mật khẩu');
    console.log('6.Back');
}

function menuOfUser() {
    let choiceOfUser;
    do {
        menuUser();
        choiceOfUser = +rl.question('Nhập lựa chọn: ');
        switch (choiceOfUser) {
            case enumUser.SHOWTEACHER:
                showTeacher()
                break;
            case enumUser.SHOWSTUDENT:
                showStudent()
                break;
            case enumUser.SEARCHSTUDENT:
                searchStudent()
                break;
            case enumUser.SEARCHTEACHER:
                searchTeacher()
                break;
            case enumUser.CHANGPASSWORD:
                updatePasswordUser()
                break;
            case enumUser.EXIT:
                break;
        }
    }
    while (choiceOfUser != enumUser.EXIT)
}

function MenuOfSignIn() {
    console.log('1.Sign in');
    console.log('2.Exiting');
}

function checkTypeId() {

    let id = rl.question('Nhập ID: ');
    let regex = new RegexId()
    if (regex.checkRegexId(id)) {
        return id;
    }
}

function signIn() {
    let id = rl.question('Nhập ID: ');
    let password = rl.question('Nhập password: ');
    if (userManagement.checkAccountAdmin(id, password)) {
        menuOfAdmin()
    } else if (userManagement.checkAccountUser(id, password)) {
        menuOfUser()
    } else {
        console.log('Mời nhập lại id và mật khẩu');
    }
}

while (choice != enumSignIn.EXIT) {
    MenuOfSignIn();
    choice = +rl.question('Nhập lựa chọn: ')
    switch (choice) {
        case enumSignIn.SIGNIN:
            signIn();
            break;
        case enumSignIn.EXIT:
            break;
        case 3:
            userManagement.showAccountAdmin()
            break;
    }
}


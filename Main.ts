import {UserManagement} from "./src/UserManagement"
import {Admin} from "./src/Admin";
import * as rl from "readline-sync"
import {User} from "./src/User";
import {SchoolManagement} from "./src/SchoolManagement";
import {Student} from "./src/Student";
import {Teacher} from "./src/Teacher";
import {WageOfTeacher} from "./src/WageOfTeacher";


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
let wage = new WageOfTeacher(300000, 200000)
schoolManagement.addWage(wage);
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
    let student = new Student(idStudent, nameStudent, ageStudent, facutlyStudent, scoreStudent);
    return student;
}

function inputTeacher() {
    let id = rl.question('Nhập mã Giáo Viên:  ');
    let name = rl.question('Nhập tên Giáo Viên: ');
    let age = +rl.question('Nhập tuổi Giáo Viên: ');
    let facutly = rl.question('Nhập tên Khoa: ');
    let workday = +rl.question('Nhập số ngày công: ')
    let teacher = new Teacher(id, name, age, facutly, workday);
    return teacher;
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
}

function menuOfSearchTeacher() {
    console.log('-----Tìm kiếm Giáo Viên-----');
    console.log('1.Tìm kiếm theo Id')
    console.log('2.Tìm kiếm theo Tên')
    console.log('3.Tìm kiếm theo tên Khoa')
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
    console.log('6.Tạo mới account admin')
    console.log('7.Back');
}

function inputWage() {
    let index = +rl.question('Nhập vị trí muốn thay đổi: ');
    let wageCNTT = +rl.question('Nhập lương CNTT muốn thay đổi: ');
    let wageQTKD = +rl.question('Nhập lương QTKD muốn thay đổi: ');
    let newWage = new WageOfTeacher(wageCNTT, wageQTKD);
    return {index, newWage};
}


function showTeacher() {
    console.log('-----Danh sách Giáo Viên-----')
    schoolManagement.showInfoTeacher();
}

function showStudent() {
    console.log('-----Danh sách Sinh Viên-----');
    schoolManagement.showInfoStudent();
}

function searchTeacher() {
    menuOfSearchTeacher();
    let choiceOfSearch = +rl.question('Mời nhập lựa chọn: ')
    switch (choiceOfSearch) {
        case 1:
            console.log('-----Tìm Kiếm Theo Id-----');
            let idSearchTeacher = rl.question('Nhập Id Giáo Viên: ');
            schoolManagement.searchTeacherByID(idSearchTeacher);
            break;
        case 2:
            console.log('-----Tìm Kiếm Theo Tên-----');
            let nameSearchTeacher = rl.question('Nhập Tên Giáo Viên: ');
            schoolManagement.searchTeacherByName(nameSearchTeacher);
            break;
        case 3:
            console.log('-----Tìm Kiếm Theo Khoa-----');
            let facutlySearchTeacher = rl.question('Nhập Khoa Giáo Viên: ');
            schoolManagement.searchTeacherByFaculty(facutlySearchTeacher);
            break;
        case 4:
            break;
    }
}

function deleteTeacher() {
    console.log('-----Xóa giáo viên-------');
    let nameTeacherWannaDelete = rl.question('Nhập tên giáo viên muốn sửa: ');
    schoolManagement.deleteTeacherByName(nameTeacherWannaDelete);
}

function editWage() {
    console.log('-----Sửa Lương Nhân viên-----')
    console.log('Bấm vị trí muốn sửa lương của các khoa');
    let {index, newWage} = inputWage();
    schoolManagement.updateWage(index, newWage);
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
    menuOfTeacher();
    let choiceOfTeacher = +rl.question('Nhập lựa chọn: ');
    switch (choiceOfTeacher) {
        case 1:
            console.log('-----Tạo Giáo Viên Mới-----');
            createNewTeacher();
            break;
        case 2:
            searchTeacher();
            break;
        case 3:
            deleteTeacher();
            break;
        case 4:
            editWage();
            break;
        case 5:
            totalWageTeacher();
            break;
        case 6:
            editInfoTeacher();
            break;
        case 7:
            break;
        default:
            console.log("Mời nhập lại");
    }
}

function searchStudent() {
    menuOfSearchStudent();
    let choiceOfSearchStudent = +rl.question('Nhập lựa chọn: ');
    switch (choiceOfSearchStudent) {
        case 1:
            console.log('-----Tìm Kiếm Theo Id-----');
            let idSearchStudent = rl.question('Nhập Id Sinh Viên: ');
            schoolManagement.searchStudentByID(idSearchStudent);
            break;
        case 2:
            console.log('-----Tìm Kiếm Theo Tên-----');
            let nameSearchStudent = rl.question('Nhập Tên Sinh Viên: ');
            schoolManagement.searchStudentByName(nameSearchStudent);
            break;
        case 3:
            console.log('-----Tìm Kiếm Theo Khoa-----');
            let facutlySearchStudent = rl.question('Nhập Khoa Sinh Viên: ');
            schoolManagement.searchStudentByFaculty(facutlySearchStudent);
            break;
    }
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
    menuOfStudent();
    let choiceOfStudent = +rl.question('Nhập lựa chọn: ');
    switch (choiceOfStudent) {
        case 1:
            createNewStudent();
            break;
        case 2:
            searchStudent();
            break;
        case 3:
            deleteStudent();
            break;
        case 4:
            editStudent();
            break;
        case 5:
            schoolManagement.rankedFaculty()
            break;
        case 0:
            break;
    }
}

function sortFacutly() {
    console.log('-----Sắp xếp theo Khoa-----');
    let facutly = rl.question('Nhập Khoa muốn sắp xếp: ');
    schoolManagement.sortByFaculty(facutly);
}

function createAccount() {
    console.log('-----Tạo mới tài khoản-----');
    let id = rl.question('Enter new ID: ');
    let password = rl.question('Enter new password: ');
    let newAccount = new Admin(id, password);
    userManagement.addAdmin(newAccount);
}

function menuOfAdmin() {
    let choiceOfAdmin;
    do {
        menu();
        choiceOfAdmin = +rl.question('Mời nhập lựa chọn: ');
        switch (choiceOfAdmin) {
            case 1:
                showTeacher();
                break;
            case 2:
                showStudent();
                break;
            case 3:
                menuTeacher();
                break;
            case 4:
                menuStudent();
                break;
            case 5:
                sortFacutly();
                break;
            case 6:
                createAccount();
                break;
            case 7:
                break;
        }
    } while(choiceOfAdmin != 7)

}

function menuUser() {
    console.log('1.Hiển thị danh sách Giáo Viên');
    console.log('2.Hiển thị danh sách Sinh Viên');
    console.log('3.Tìm kiếm sinh viên.');
    console.log('4.Tìm kiếm giáo viên');
    console.log('5.Back');
}

function menuOfUser() {
    menuUser();
    let choiceOfUser = +rl.question('Nhập lựa chọn: ');
    switch (choiceOfUser) {
        case 1:
            showTeacher()
            break;
        case 2:
            showStudent()
            break;
        case 3:
           searchStudent()
            break;
        case 4:
            searchTeacher()
            break;
        case 5:
            break;
    }
}

function MenuOfSignIn() {
    console.log('1.Sign in');
    console.log('2.Exiting');
}

function inputAdmin() {
    let id = rl.question('Nhập id: ');
    let password = rl.question('Nhập password: ');
    return {id, password};
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

while (choice != 2) {
    MenuOfSignIn();
    choice = +rl.question('Nhập lựa chọn: ')
    switch (choice) {
        case 1:
            signIn();
            break;
        case 2:
            break;
    }
}


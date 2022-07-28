"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserManagement_1 = require("./src/UserManagement");
const Admin_1 = require("./src/Admin");
const rl = __importStar(require("readline-sync"));
const User_1 = require("./src/User");
const SchoolManagement_1 = require("./src/SchoolManagement");
const Student_1 = require("./src/Student");
const Teacher_1 = require("./src/Teacher");
const WageOfTeacher_1 = require("./src/WageOfTeacher");
let userManagement = new UserManagement_1.UserManagement();
let schoolManagement = new SchoolManagement_1.SchoolManagement();
let admin = new Admin_1.Admin('admin', 'admin');
userManagement.addAdmin(admin);
let student1 = new Student_1.Student('A05', 'Ngoc', 29, 'Quan Tri Kinh Doanh', 6);
let student2 = new Student_1.Student('A01', 'Minh', 25, 'Cong Nghe Thong Tin', 9);
let teacher1 = new Teacher_1.Teacher('T01', 'Hoang Dao Thuy', 30, 'Quan Tri Kinh Doanh', 28);
let teacher2 = new Teacher_1.Teacher('T02', 'Vu Minh Phuong', 35, 'Cong Nghe Thong Tin', 26);
let teacher3 = new Teacher_1.Teacher('T03', 'Vu Trong Phung', 32, 'Cong Nghe Thong Tin', 25);
let wage = new WageOfTeacher_1.WageOfTeacher(300000, 200000);
schoolManagement.addWage(wage);
schoolManagement.addStudent(student1);
schoolManagement.addStudent(student2);
schoolManagement.addTeacher(teacher1);
schoolManagement.addTeacher(teacher2);
schoolManagement.addTeacher(teacher3);
let user = new User_1.User('user', 'user');
let choice = -1;
function inputStudent() {
    console.log('-----Tạo Sinh Viên Mới-----');
    let idStudent = rl.question('Nhập mã sinh viên:  ');
    let nameStudent = rl.question('Nhập tên sinh viên: ');
    let ageStudent = +rl.question('Nhập tuổi sinh viên: ');
    let facutlyStudent = rl.question('Nhập tên Khoa: ');
    let scoreStudent = +rl.question('Nhập điểm: ');
    let student = new Student_1.Student(idStudent, nameStudent, ageStudent, facutlyStudent, scoreStudent);
    return student;
}
function inputTeacher() {
    let id = rl.question('Nhập mã Giáo Viên:  ');
    let name = rl.question('Nhập tên Giáo Viên: ');
    let age = +rl.question('Nhập tuổi Giáo Viên: ');
    let facutly = rl.question('Nhập tên Khoa: ');
    let workday = +rl.question('Nhập số ngày công: ');
    let teacher = new Teacher_1.Teacher(id, name, age, facutly, workday);
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
    console.log('4.Sửa thông sinh viên');
    console.log('5.Xếp loại học lực.');
    console.log('0.Back');
}
function menuOfSearchStudent() {
    console.log('-----Tìm kiếm Sinh Viên-----');
    console.log('1.Tìm kiếm theo Id');
    console.log('2.Tìm kiếm theo Tên');
    console.log('3.Tìm kiếm theo tên Khoa');
}
function menuOfSearchTeacher() {
    console.log('-----Tìm kiếm Giáo Viên-----');
    console.log('1.Tìm kiếm theo Id');
    console.log('2.Tìm kiếm theo Tên');
    console.log('3.Tìm kiếm theo tên Khoa');
}
function menuOfTeacher() {
    console.log('-----Teacher Management-----');
    console.log('1.Tạo mới giáo viên.');
    console.log('2.Tìm kiếm giáo viên.');
    console.log('3.Xóa giáo viên.');
    console.log('4.Sửa tiền lương giáo viên.');
    console.log('5.Hiển thị danh sách lương.');
    console.log('6.Sửa thông tin giáo viên.');
}
function menu() {
    console.log('-----School Management-----');
    console.log('1.Hiển thị danh sách giáo viên');
    console.log('2.Hiển thị danh sách sinh viên');
    console.log('3.Menu of Teacher');
    console.log('4.Menu of Student');
    console.log('5.Sắp xếp thông tin');
    console.log('6.Tạo mới account admin');
    console.log('0.Back');
}
function inputWage() {
    let index = +rl.question('Nhập vị trí muốn thay đổi: ');
    let wageCNTT = +rl.question('Nhập lương CNTT muốn thay đổi: ');
    let wageQTKD = +rl.question('Nhập lương QTKD muốn thay đổi: ');
    let newWage = new WageOfTeacher_1.WageOfTeacher(wageCNTT, wageQTKD);
    return { index, newWage };
}
function menuOfAdmin() {
    menu();
    let choiceOfSchoolManagegent = +rl.question('Mời nhập lựa chọn: ');
    switch (choiceOfSchoolManagegent) {
        case 1:
            console.log('-----Danh sách Giáo Viên-----');
            schoolManagement.showInfoTeacher();
            break;
        case 2:
            console.log('-----Danh sách Sinh Viên-----');
            schoolManagement.showInfoStudent();
            break;
        case 3:
            menuOfTeacher();
            let choiceOfTeacher = +rl.question('Nhập lựa chọn: ');
            switch (choiceOfTeacher) {
                case 1:
                    console.log('-----Tạo Giáo Viên Mới-----');
                    createNewTeacher();
                    break;
                case 2:
                    menuOfSearchTeacher();
                    let choiceOfSearch = +rl.question('Mời nhập lựa chọn: ');
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
                    break;
                case 3:
                    console.log('-----Xóa giáo viên-------');
                    let nameTeacherWannaDelete = rl.question('Nhập tên giáo viên muốn sửa: ');
                    schoolManagement.deleteTeacherByName(nameTeacherWannaDelete);
                    break;
                case 4:
                    console.log('-----Sửa Lương Nhân viên-----');
                    console.log('Bấm vị trí muốn sửa lương của các khoa');
                    let { index, newWage } = inputWage();
                    schoolManagement.updateWage(index, newWage);
                    break;
                case 5:
                    console.log('-----Lương của giáo viên-----');
                    schoolManagement.totalWorkDay();
                    break;
                case 6:
                    console.log('-----Sửa thông Tin giáo viên-----');
                    let name = rl.question('Nhập tên giáo viên cần sửa: ');
                    let newTeacher = inputTeacher();
                    schoolManagement.updateTeacher(name, newTeacher);
                    break;
                default:
                    break;
            }
            break;
        case 4:
            menuOfStudent();
            let choiceOfStudent = +rl.question('Nhập lựa chọn: ');
            switch (choiceOfStudent) {
                case 1:
                    createNewStudent();
                    break;
                case 2:
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
                        case 4:
                            console.log('-----Sửa thông tin sinh viên-----');
                            break;
                    }
                    break;
                case 3:
                    let nameStudentWannaDelete = rl.question('Nhập tên Sinh Viên muốn xóa: ');
                    schoolManagement.deleteStudentByName(nameStudentWannaDelete);
                    break;
                case 4:
                    console.log('-----Sửa thông Tin sinh viên-----');
                    let name = rl.question('Nhập tên sinh viên cần sửa: ');
                    let newStudent = inputStudent();
                    schoolManagement.updateStudent(name, newStudent);
                    break;
                case 5:
                    schoolManagement.rankedFaculty();
                    break;
                case 0:
                    break;
            }
            break;
        case 5:
            console.log('-----Sắp xếp theo Khoa-----');
            let facutly = rl.question('Nhập Khoa muốn sắp xếp: ');
            schoolManagement.sortByFaculty(facutly);
            break;
        case 6:
            console.log('-----Tạo mới tài khoản-----');
            let id = rl.question('Enter new ID: ');
            let password = rl.question('Enter new password: ');
            let newAccount = new Admin_1.Admin(id, password);
            userManagement.addAdmin(newAccount);
            break;
        case 7:
            console.log(userManagement.showAccountAdmin());
            break;
        case 0:
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
    return { id, password };
}
while (choice != 2) {
    MenuOfSignIn();
    choice = +rl.question('Nhập lựa chọn: ');
    switch (choice) {
        case 1:
            console.log(userManagement.showAccountAdmin());
            let id = rl.question('Nhập ID: ');
            let password = rl.question('Nhập password: ');
            if (userManagement.checkAccount(id, password)) {
                menuOfAdmin();
            }
            else {
                console.log('Mời nhập lại id và mật khẩu');
            }
            break;
        case 2:
            break;
    }
}

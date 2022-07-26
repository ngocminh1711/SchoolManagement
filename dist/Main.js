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
let student1 = new Student_1.Student('A05', 'Ngoc', 29, 'Quan Tri Kinh Doanh');
let student2 = new Student_1.Student('A01', 'Minh', 25, 'Cong Nghe Thong Tin');
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
    console.log('-----Tạo Học Sinh Mới-----');
    let idStudent = rl.question('Nhập mã Học Sinh:  ');
    let nameStudent = rl.question('Nhập tên Học Sinh: ');
    let ageStudent = +rl.question('Nhập tuổi Học Sinh: ');
    let facutlyStudent = rl.question('Nhập tên Khoa: ');
    let student = new Student_1.Student(idStudent, nameStudent, ageStudent, facutlyStudent);
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
function displaySignIn() {
    console.log('-----Sign In Display-----');
    console.log('1.Sign In');
    console.log('2.Exit');
    choice = +rl.question("Enter your options: ");
    let id = rl.question('Enter your ID: ');
    let password = rl.question('Enter your password:');
    return { id, password };
}
let { id, password } = displaySignIn();
function menuOfAdmin() {
    console.log('-----School Management-----');
    console.log('1.Hiển thị danh sách giáo viên');
    console.log('2.Hiển thị danh sách học sinh');
    console.log('3.Menu of Teacher');
    console.log('4.Menu of Student');
    console.log('5.Sắp xếp thông tin');
    console.log('0.Back');
    let choiceOfSchoolManagegent = +rl.question('Mời nhập lựa chọn: ');
    switch (choiceOfSchoolManagegent) {
        case 1:
            console.log('-----Danh sách Giáo Viên-----');
            schoolManagement.showInfoTeacher();
            break;
        case 2:
            console.log('-----Danh sách Học Sinh-----');
            schoolManagement.showInfoStudent();
            break;
        case 3:
            console.log('-----Teacher Management-----');
            console.log('1.Tạo mới giáo viên.');
            console.log('2.Tìm kiếm giáo viên.');
            console.log('3.Xóa giáo viên.');
            console.log('4.Sửa tiền lương giáo viên.');
            console.log('5.Hiển thị danh sách lương.');
            console.log('6.Sửa thông tin giáo viên.');
            let choiceOfTeacher = +rl.question('Nhập lựa chọn: ');
            switch (choiceOfTeacher) {
                case 1:
                    console.log('-----Tạo Giáo Viên Mới-----');
                    createNewTeacher();
                    break;
                case 2:
                    console.log('-----Tìm kiếm Giáo Viên-----');
                    console.log('1.Tìm kiếm theo Id');
                    console.log('2.Tìm kiếm theo Tên');
                    console.log('3.Tìm kiếm theo tên Khoa');
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
                    console.log('Bấm 0 Để sửa lương của các khoa');
                    let index = +rl.question('Nhập vị trí muốn thay đổi: ');
                    let wageCNTT = +rl.question('Nhập lương CNTT muốn thay đổi: ');
                    let wageQTKD = +rl.question('Nhập lương QTKD muốn thay đổi: ');
                    let newWage = new WageOfTeacher_1.WageOfTeacher(wageCNTT, wageQTKD);
                    schoolManagement.updateWage(index, newWage);
                    break;
                case 5:
                    console.log('-----Lương của giáo vien-----');
                    schoolManagement.totalWorkDay();
                    break;
                case 6:
                    console.log('-----Sửa Thông Tin Giáo Viên-----');
                    let name = rl.question('Nhập tên giáo viên cần sửa: ');
                    let newTeacher = inputTeacher();
                    schoolManagement.updateTeacher(name, newTeacher);
                    break;
                default:
                    break;
            }
            break;
        case 4:
            console.log('-----Student Management-----');
            console.log('1.Tạo mới sinh viên.');
            console.log('2.Tìm kiếm sinh viên.');
            console.log('3.Xóa sinh viên.');
            let choiceOfStudent = +rl.question('Nhập lựa chọn: ');
            switch (choiceOfStudent) {
                case 1:
                    createNewStudent();
                    break;
                case 2:
                    console.log('-----Tìm kiếm Sinh Viên-----');
                    console.log('1.Tìm kiếm theo Id');
                    console.log('2.Tìm kiếm theo Tên');
                    console.log('3.Tìm kiếm theo tên Khoa');
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
                            break;
                    }
                    break;
            }
            break;
        case 5:
            console.log('-----Sắp xếp theo Khoa-----');
            let facutly = rl.question('Nhập Khoa muốn sắp xếp: ');
            schoolManagement.sortByFaculty(facutly);
            break;
        case 0:
            displaySignIn();
            break;
    }
}
while (choice != 2) {
    switch (choice) {
        case 1:
            if (id === admin.id && password === admin.password) {
                menuOfAdmin();
            }
            else if (id !== admin.id && password !== admin.password) {
                console.log('Mời nhập lại id và passwords');
                displaySignIn();
                menuOfAdmin();
            }
            break;
        case 2:
            break;
        default:
            break;
    }
    break;
}

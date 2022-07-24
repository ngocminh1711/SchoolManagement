import {UserManagement} from "./src/UserManagement"
import {Admin} from "./src/Admin";
import * as rl from "readline-sync"
import {User} from "./src/User";
import {SchoolManagement} from "./src/SchoolManagement";
import {Student} from "./src/Student";
import {Teacher} from "./src/Teacher";


let userManagement = new UserManagement();
let schoolManagement = new SchoolManagement();
let admin = new Admin('admin', 'admin');
userManagement.addAdmin(admin);
let student1 = new Student('A05','Ngoc',29,'Quan Tri Kinh Doanh');
let student2 = new Student('A01', 'Minh', 25,'Cong Nghe Thong Tin');
let teacher1 = new Teacher('T01','Hoang Dao Thuy',30,'Quan Tri Kinh Doanh',28);
let teacher2 = new Teacher('T02','Vu Minh Phuong',35,'Cong Nghe Thong Tin',26);
schoolManagement.addStudent(student1);
schoolManagement.addStudent(student2);
schoolManagement.addTeacher(teacher1);
schoolManagement.addTeacher(teacher2);

let user = new User('user', 'user')
let choice = -1;

function inputStudent() {
    console.log('-----Tạo Học Sinh Mới-----');
    let idStudent = rl.question('Nhập mã Học Sinh:  ');
    let nameStudent = rl.question('Nhập tên Học Sinh: ');
    let ageStudent = +rl.question('Nhập tuổi Học Sinh: ');
    let facutlyStudent = rl.question('Nhập tên Khoa: ');
    let student = new Student(idStudent, nameStudent, ageStudent, facutlyStudent);
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

function displaySignIn() {
    console.log('-----Sign In Display-----')
    console.log('1.Sign In');
    console.log('2.Exit');
    choice = +rl.question("Enter your options: ");


    let id = rl.question('Enter your ID: ')
    let password = rl.question('Enter your password:')
    return {id, password};
}

let {id, password} = displaySignIn();

function menuOfAdmin() {
    console.log('-----School Management-----');
    console.log('1.Hiển thị danh sách giáo viên');
    console.log('2.Hiển thị danh sách học sinh');
    console.log('3.Tạo mới giáo viên');
    console.log('4.Tạo mới học sinh');
    console.log('5.Tìm kiếm Giáo Viên');
    console.log('6.Hiển thị danh sách lương của giáo viên');
    console.log('7.Back');
    let choiceOfSchoolManagegent = +rl.question('Mời nhập lựa chọn: ');
    switch (choiceOfSchoolManagegent) {
        case 1:
            console.log('-----Danh sách Giáo Viên-----')
            schoolManagement.showInfoTeacher();
            break;
        case 2:
            console.log('-----Danh sách Học Sinh-----');
            schoolManagement.showInfoStudent();
            break;
        case 3:
            console.log('-----Tạo Giáo Viên Mới-----');
            createNewTeacher();
            break;
        case 4:
            console.log('-----Tạo Học Sinh Mới-----');
            createNewStudent();
            break;
        case 5:
            console.log('-----Tìm kiếm Giáo Viên-----');
            console.log('1.Tìm kiếm theo Id')
            console.log('2.Tìm kiếm theo Tên')
            console.log('3.Tìm kiếm theo tên Khoa')
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
        case 6:
            console.log('-----Lương của giáo vien-----');
            schoolManagement.totalWorkDay();
            break;
        case 7:
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
        case 2:
            break;
        default:
            break;
    }

}




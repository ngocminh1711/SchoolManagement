"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolManagement = void 0;
class SchoolManagement {
    constructor() {
        this.teachers = [];
        this.students = [];
    }
    showAllInFo() {
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student) {
        this.students.push(student);
    }
    showInfoTeacher() {
        console.table(this.teachers);
    }
    showInfoStudent() {
        console.table(this.students);
    }
    searchTeacherByID(id) {
        let newTeacherList = [];
        let flag = -1;
        this.teachers.forEach((teacher, index) => {
            if (teacher.id == id) {
                newTeacherList.push(this.teachers[index]);
                flag++;
            }
        });
        console.table(newTeacherList);
    }
    searchTeacherByName(name) {
        let newTeacherList = [];
        let flag = -1;
        this.teachers.forEach((teacher, index) => {
            if (teacher.name == name) {
                newTeacherList.push(this.teachers[index]);
                flag++;
            }
        });
        console.table(newTeacherList);
    }
    searchTeacherByFaculty(faculty) {
        let newTeacherList = [];
        let flag = -1;
        this.teachers.forEach((teacher, index) => {
            if (teacher.faculty == faculty) {
                newTeacherList.push(this.teachers[index]);
                flag++;
            }
        });
        console.table(newTeacherList);
    }
    updateTeacher() {
    }
    totalWorkDay() {
        let totalWorkDay = 0;
        this.teachers.forEach((teacher, index) => {
            if (teacher.faculty == 'Cong Nghe Thong Tin') {
                totalWorkDay = this.teachers[index].workday * 300000;
            }
            else if (teacher.faculty == 'Quan Tri Kinh Doanh') {
                totalWorkDay = this.teachers[index].workday * 200000;
            }
            console.log('Lương của giáo viên' + this.teachers[index].name + ' là: ' + totalWorkDay);
        });
    }
}
exports.SchoolManagement = SchoolManagement;

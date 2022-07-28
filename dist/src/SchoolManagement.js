"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolManagement = void 0;
class SchoolManagement {
    constructor() {
        this.teachers = [];
        this.students = [];
        this.wages = [];
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student) {
        this.students.push(student);
    }
    addWage(wage) {
        this.wages.push(wage);
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
    searchStudentByID(id) {
        let newStudentList = [];
        let flag = -1;
        this.students.forEach((student, index) => {
            if (student.id == id) {
                newStudentList.push(this.students[index]);
                flag++;
            }
        });
        console.table(newStudentList);
    }
    searchStudentByName(name) {
        let newStudentList = [];
        let flag = -1;
        this.students.forEach((student, index) => {
            if (student.name == name) {
                newStudentList.push(this.students[index]);
                flag++;
            }
        });
        console.table(newStudentList);
    }
    searchStudentByFaculty(faculty) {
        let newStudentList = [];
        let flag = -1;
        this.students.forEach((student, index) => {
            if (student.faculty == faculty) {
                newStudentList.push(this.students[index]);
                flag++;
            }
        });
        console.table(newStudentList);
    }
    updateTeacher(name, newTeacher) {
        this.teachers.forEach((teacher, index) => {
            if (teacher.name == name) {
                this.teachers[index] = newTeacher;
            }
            return this.teachers[index];
        });
    }
    updateStudent(name, newStudent) {
        this.students.forEach((student, index) => {
            if (student.name == name) {
                this.students[index] = newStudent;
            }
            return this.students[index];
        });
    }
    updateWage(index, newWage) {
        this.wages[index] = newWage;
    }
    sortByFaculty(faculty) {
        let newSortByFaculty = [];
        let flag1 = -1;
        let flag2 = -1;
        this.teachers.forEach((teacher, index) => {
            if (teacher.faculty == faculty) {
                newSortByFaculty.push(teacher);
                flag1++;
            }
        });
        this.students.forEach((student, index) => {
            if (student.faculty == faculty) {
                newSortByFaculty.push(student);
                flag2++;
            }
        });
        console.log(newSortByFaculty);
    }
    deleteTeacherByName(name) {
        let flag = -1;
        this.teachers.forEach((teacher, index) => {
            if (teacher.name == name) {
                flag++;
                this.teachers.splice(index, 1);
            }
        });
    }
    deleteStudentByName(name) {
        let flag = -1;
        this.students.forEach((student, index) => {
            if (student.name == name) {
                flag++;
                this.students.splice(index, 1);
            }
        });
    }
    totalWorkDay() {
        let totalWorkDay = 0;
        this.teachers.forEach((teacher, index) => {
            this.wages.forEach((wage) => {
                if (teacher.faculty == 'Cong Nghe Thong Tin') {
                    totalWorkDay = this.teachers[index].workday * wage.wageCNTT;
                }
                else if (teacher.faculty == 'Quan Tri Kinh Doanh') {
                    totalWorkDay = this.teachers[index].workday * wage.wageKTQD;
                }
            });
            console.log('Lương của giáo viên ' + this.teachers[index].name + ' là: ' + totalWorkDay);
        });
    }
    rankedFaculty() {
        this.students.forEach((student, index) => {
            if (student.score > 8) {
                console.log('Sinh viên ' + this.students[index].name + ' học Khoa' + this.students[index].faculty + ' xếp hạng A');
            }
            else if (student.score > 6 && student.score <= 8) {
                console.log('Sinh viên ' + this.students[index].name + ' học Khoa' + this.students[index].faculty + ' xếp hạng B');
            }
            else {
                console.log('Sinh viên ' + this.students[index].name + ' học Khoa' + this.students[index].faculty + 'xếp hạng C');
            }
        });
    }
}
exports.SchoolManagement = SchoolManagement;

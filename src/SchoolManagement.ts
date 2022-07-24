import {Student} from "./Student";
import {Teacher} from "./Teacher";

export class SchoolManagement {
    teachers: Teacher[] = [];
    students: Student[] = [];


    showAllInFo() {

    }

    addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student: Student) {
        this.students.push(student);
    }
    showInfoTeacher(){
        console.table(this.teachers);
    }
    showInfoStudent() {
        console.table(this.students);
    }
    searchTeacherByID(id: string) {
        let newTeacherList:any[] = [];
        let flag = -1;
        this.teachers.forEach((teacher,index) => {
            if(teacher.id == id) {
                newTeacherList.push(this.teachers[index]);
                flag++;
            }
        })
        console.table(newTeacherList);
    }
    searchTeacherByName(name: string) {
        let newTeacherList:any[] = [];
        let flag = -1;
        this.teachers.forEach((teacher,index) => {
            if(teacher.name == name) {
                newTeacherList.push(this.teachers[index]);
                flag++;
            }
        })
        console.table(newTeacherList);
    }
    searchTeacherByFaculty(faculty: string) {
        let newTeacherList:any[] = [];
        let flag = -1;
        this.teachers.forEach((teacher,index) => {
            if(teacher.faculty == faculty) {
                newTeacherList.push(this.teachers[index]);
                flag++;
            }
        })
        console.table(newTeacherList);
    }
    updateTeacher() {
    }
    totalWorkDay() {
        let totalWorkDay = 0;
        this.teachers.forEach((teacher,index) => {
            if(teacher.faculty == 'Cong Nghe Thong Tin') {
                totalWorkDay = this.teachers[index].workday * 300000;
            }
            else if(teacher.faculty == 'Quan Tri Kinh Doanh') {
                totalWorkDay = this.teachers[index].workday * 200000;
            }
            console.log('Lương của giáo viên' + this.teachers[index].name + ' là: ' + totalWorkDay)
        })

    }

}
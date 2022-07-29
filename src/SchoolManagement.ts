import {Student} from "./Student";
import {Teacher} from "./Teacher";
import {WageOfTeacher} from "./WageOfTeacher";

export class SchoolManagement {

    teachers: Teacher[] = [];
    students: Student[] = [];
    wages: WageOfTeacher[] = [];

    addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student: Student) {
        this.students.push(student);
    }
    addWage(wage: WageOfTeacher) {
        this.wages.push(wage);
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
    searchStudentByID(id: string) {
        let newStudentList:any[] = [];
        let flag = -1;
        this.students.forEach((student,index) => {
            if(student.id == id) {
                newStudentList.push(this.students[index]);
                flag++;
            }
        })
        console.table(newStudentList);
    }
    searchStudentByName(name: string) {
        let newStudentList:any[] = [];
        let flag = -1;
        this.students.forEach((student,index) => {
            if(student.name == name) {
                newStudentList.push(this.students[index]);
                flag++;
            }
        })
        console.table(newStudentList);
    }
    searchStudentByFaculty(faculty: string) {
        let newStudentList:any[] = [];
        let flag = -1;
        this.students.forEach((student,index) => {
            if(student.faculty == faculty) {
                newStudentList.push(this.students[index]);
                flag++;
            }
        })
        console.table(newStudentList);
    }
    updateTeacher(name: string, newTeacher: Teacher) {
        this.teachers.forEach((teacher,index) => {
            if(teacher.name == name) {
                this.teachers[index] = newTeacher;
            }
            return this.teachers[index];
        })
    }
    updateStudent(name: string, newStudent: Student) {
        this.students.forEach((student,index) => {
            if(student.name == name) {
                this.students[index] = newStudent;
            }
            return this.students[index];
        })
    }
    updateWage(index: number, newWage: WageOfTeacher) {
        this.wages[index] = newWage;
    }
    sortByFaculty(faculty: string) {
        let newSortByFaculty:any[]=[];
        let flag1 = -1;
        let flag2 = -1;
        this.teachers.forEach((teacher,index) => {
            if(teacher.faculty == faculty) {
                newSortByFaculty.push(teacher);
                flag1++;
            }
        })
        this.students.forEach((student,index) => {
            if(student.faculty == faculty) {
                newSortByFaculty.push(student);
                flag2++;
            }
        })
        console.log(newSortByFaculty)
    }
    deleteTeacherByName(name:string) {
        let flag = -1;
        this.teachers.forEach((teacher,index) => {
            if(teacher.name == name ){
                flag++;
                this.teachers.splice(index,1)
            }
        })
    }
    deleteStudentByName(name:string) {
        let flag = -1;
        this.students.forEach((student,index) => {
            if(student.name == name ){
                flag++;
                this.students.splice(index,1)
            }
        })
    }

    totalWorkDay() {
        let totalWorkDay = 0;
        this.teachers.forEach((teacher,index) => {
            this.wages.forEach((wage) => {
                if(teacher.faculty == 'Cong Nghe Thong Tin') {
                    totalWorkDay = this.teachers[index].workday * wage.wageCNTT;}
                else if(teacher.faculty == 'Quan Tri Kinh Doanh') {
                    totalWorkDay = this.teachers[index].workday * wage.wageKTQD;
                }
                else if (teacher.faculty == 'Du Lich') {
                    totalWorkDay = this.teachers[index].workday * wage.wageDulich;
                }
                else if (teacher.faculty == 'Ke Toan') {
                    totalWorkDay = this.teachers[index].workday * wage.wageKeToan;
                }
            })
            console.log('Lương của giáo viên ' + this.teachers[index].name + ' là: ' + totalWorkDay)
        })
    }
    rankedFaculty () {
        this.students.forEach((student,index) =>{
            if(student.score > 8){
                console.log('----Sinh viên '+ this.students[index].name+ ' học khoa ' +this.students[index].faculty +' xếp hạng A---');
            }
            else if (student.score >6 && student.score <=8) {
                console.log('----Sinh viên '+ this.students[index].name+ ' học khoa '  +this.students[index].faculty +' xếp hạng B---');
            }
            else {
                console.log('---Sinh viên ' + this.students[index].name + ' học khoa ' +this.students[index].faculty + 'xếp hạng C---');
            }
        })
    }
}
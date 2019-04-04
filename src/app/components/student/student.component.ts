import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {Student} from '../../models/student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    students: Student[];
    student = new Student();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getAllStudent('http://localhost:8080/api/student/getAllStudent')
          .subscribe(value => {
                  this.students = value;
              },
          error => {
              console.log(error);
          });
  }

    insertStudent() {
        this.httpService.insertStudent('http://localhost:8080/api/student/insertStudent', this.student)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });

    }

    deleteStudentById() {
        this.httpService.deleteStudentById('http://localhost:8080/api/student/deleteStudent', this.student.id)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }

}

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

}

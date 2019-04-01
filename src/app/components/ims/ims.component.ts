import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-ims',
  templateUrl: './ims.component.html',
  styleUrls: ['./ims.component.scss']
})
export class ImsComponent implements OnInit {

    imsMessage: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getImsConnect('http://localhost:8080/api/student/imsConnect')
          .subscribe(value => {
                  console.log(value);
                  this.imsMessage = value;
              },
              error => {
                  console.log(error);
              });
  }

}

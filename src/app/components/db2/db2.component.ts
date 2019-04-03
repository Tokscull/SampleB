import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-db2',
  templateUrl: './db2.component.html',
  styleUrls: ['./db2.component.scss']
})
export class Db2Component implements OnInit {
    private db2Message: any;
    message: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.message = '';
      this.db2Message = null;
  }

    sendMessage(message: string) {
        this.httpService.getDb2Connect('http://localhost:8080/api/db2/db2Connect', message)
            .subscribe(value => {
                    console.log(value);
                    this.db2Message = value;
                },
                error => {
                    console.log(error);
                });
    }
}

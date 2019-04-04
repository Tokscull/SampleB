import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {Command} from '../../models/command';

@Component({
  selector: 'app-db2',
  templateUrl: './db2.component.html',
  styleUrls: ['./db2.component.scss']
})
export class Db2Component implements OnInit {

    db2Message: any;
    command: Command;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.command = new Command();
      this.db2Message = null;
  }

    sendMessage(command: Command) {
        this.httpService.getDb2Connect('http://localhost:8080/api/db2/db2Connect', command)
            .subscribe(value => {
                    console.log(value);
                    this.db2Message = value;
                },
                error => {
                    console.log(error);
                });
    }
}

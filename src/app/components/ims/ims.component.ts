import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {Command} from '../../models/command';

@Component({
  selector: 'app-ims',
  templateUrl: './ims.component.html',
  styleUrls: ['./ims.component.scss']
})
export class ImsComponent implements OnInit {

    imsMessage: any;
    isOptions: boolean;
    command: Command;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.command = new Command();
      this.imsMessage = null;
      this.isOptions = false;
  }

    sendMessage(command: Command) {
        if (!this.isOptions) {
            this.isOptions = true;
        } else {
            this.httpService.getImsConnect('http://localhost:8080/api/ims/imsConnect', command)
                .subscribe(value => {
                        console.log(value);
                        this.imsMessage = value;
                    },
                    error => {
                        console.log(error);
                    });
        }
    }
}

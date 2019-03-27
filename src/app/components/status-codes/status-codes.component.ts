import { Component, OnInit } from '@angular/core';
import {StatusCodeService} from '../../serveces/status-code/status-code.service';
import {StatusCode} from '../../models/status-code';

@Component({
  selector: 'app-status-codes',
  templateUrl: './status-codes.component.html',
  styleUrls: ['./status-codes.component.scss']
})
export class StatusCodesComponent implements OnInit {

    private statusCodes: StatusCode[];
    childStatusCode = new StatusCode();


  constructor(private statusCodesService: StatusCodeService) {
  }

  ngOnInit() {
      this.statusCodes = this.statusCodesService.getStatusCode();
  }

    showCodeInfo(sc: StatusCode) {
        this.childStatusCode = sc;
    }





}

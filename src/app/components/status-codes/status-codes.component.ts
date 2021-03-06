import { Component, OnInit } from '@angular/core';
import {StatusCodeService} from '../../services/status-code/status-code.service';
import {StatusCode} from '../../models/status-code';
import {ObjectType} from '../../models/object-type';

@Component({
  selector: 'app-status-codes',
  templateUrl: './status-codes.component.html',
  styleUrls: ['./status-codes.component.scss']
})
export class StatusCodesComponent implements OnInit {

    statusCodes: StatusCode[];
    childStatusCode = new StatusCode();
    isShowStatusCode: boolean;
    objectType: ObjectType;
    isShowObjectType: boolean;
    searchStr: string;


  constructor(private statusCodesService: StatusCodeService) {
  }

  ngOnInit() {
      this.isShowStatusCode = false;
      this.isShowObjectType = false;
      this.statusCodes = this.statusCodesService.getStatusCode();
      this.searchStr = '';
  }

    showCodeInfo(statusCode: StatusCode) {
        this.childStatusCode = statusCode;
        this.isShowStatusCode = true;
        this.isShowObjectType = false;
    }


    onDataChange(objectType: ObjectType) {
      this.objectType = objectType;
      this.isShowObjectType = !this.isShowObjectType;
    }
}

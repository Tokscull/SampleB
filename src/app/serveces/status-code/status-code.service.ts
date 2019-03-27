import { Injectable } from '@angular/core';
import {STATUS_CODES} from '../../mocks/status-codes-mocks';

@Injectable({
  providedIn: 'root'
})
export class StatusCodeService {

    StatusCode: any;

  constructor() {
      this.StatusCode = STATUS_CODES;
  }

  public getStatusCode() {
      return this.StatusCode;
  }
}

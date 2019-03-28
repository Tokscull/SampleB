import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StatusCode} from '../../../models/status-code';

@Component({
  selector: 'app-status-code',
  templateUrl: './status-code.component.html',
  styleUrls: ['./status-code.component.scss']
})
export class StatusCodeComponent implements OnInit {

    @Input() statusCode = new StatusCode();
    @Output() dataChange = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    click() {
        this.dataChange.emit(this.statusCode.objectType);
    }

}

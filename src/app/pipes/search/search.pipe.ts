import { Pipe, PipeTransform } from '@angular/core';
import {StatusCode} from '../../models/status-code';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(statusCodes: StatusCode[], value: string): StatusCode[] {
        if (!statusCodes) {
            return null;
        }
        return statusCodes.filter(statusCode => {
            return statusCode.code.includes(value);
        });
    }

}

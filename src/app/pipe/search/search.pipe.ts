import { Pipe, PipeTransform } from '@angular/core';
import {StatusCode} from '../../models/status-code';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(statusCodes: StatusCode[], value: string) {
        return statusCodes.filter(statusCode => {
            return statusCode.code.includes(value);
        });
    }

}

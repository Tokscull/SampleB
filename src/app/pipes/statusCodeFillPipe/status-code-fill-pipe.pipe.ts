import {Pipe, PipeTransform} from '@angular/core';
import {StatusCode} from '../../models/status-code';

@Pipe({
    name: 'statusCodeFillPipe'
})
export class StatusCodeFillPipePipe implements PipeTransform {

    transform(statusCodes: StatusCode[]): StatusCode[] {
        if (!statusCodes) {
          return null;
        }
        statusCodes.forEach((statusCode: StatusCode) => {
            statusCode.objectTypeName = statusCode.objectType.name;
        });
        return statusCodes;
    }

}

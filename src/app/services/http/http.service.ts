import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../../models/student';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


    constructor(private http: HttpClient) {
    }

    public getAllStudent(url: string): Observable<any> {
        return this.http.get(url);
    }

    public insertStudent(url: string, student: Student): Observable<any> {
        return this.http.post(url, student);
    }

    public getImsConnect(url: string): Observable<any> {
        return this.http.get(url);
    }
}

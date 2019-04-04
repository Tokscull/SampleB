import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../../models/student';
import {Command} from '../../models/command';

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

    public deleteStudentById(url: string, id: number): Observable<any> {
        return this.http.post(url, id);
    }

    public getDb2Connect(url: string, command: Command): Observable<any> {
        return this.http.post(url, command);
    }

    public getImsConnect(url: string, command: Command): Observable<any> {
        return this.http.post(url, command);
    }
}


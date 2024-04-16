import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemoServService {

  constructor(private httpClient : HttpClient ) { }

  getData():Observable<any>{
    return this.httpClient.get<any>('https://dummy.restapiexample.com/api/v1/employees');
  }



}

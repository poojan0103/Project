import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  result = {}
  constructor(private http: HttpClient) { }
  public addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:9999/emp/add', data)
  }
  public listEmployee(): Observable<any> {
    return this.http.get('http://localhost:9999/emp/get')
  }
  public listEmployeebysalary(minSalary: string, maxSalary: string, dept: string): Observable<any> {
    this.result = {
      minSalary,
      maxSalary,
      department: dept
    }
    console.log(this.result);
    // console.log('http://localhost:9999/emp/salary',this.result);


    return this.http.post('http://localhost:9999/emp/salary',this.result)
  }
  // public listEmployeebysalarys():Observable<any>{
  //   return this.http.get('http://localhost:9999/emp/salarys')
  // }
  public alldepartment(): Observable<any> {
    return this.http.get('http://localhost:9999/dep/get')
  }

}

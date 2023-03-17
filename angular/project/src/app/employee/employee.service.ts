import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, ObservableLike } from 'rxjs'
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
  public listEmployeebysalary(minSalary: string, maxSalary: string, dept: string,eduction : any): Observable<any> {
    this.result = {
      minSalary,
      maxSalary,
      department: dept,
      education : eduction
    }
    console.log(this.result);
    

      
    return this.http.post('http://localhost:9999/emp/salary',this.result)
  }
  public education():Observable<any>{
    return this.http.get(' http://localhost:9999/edu/get')
  }
  
  public alldepartment(): Observable<any> {
    return this.http.get('http://localhost:9999/dep/get')
  }

}

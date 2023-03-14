import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  public addEmployee(data:any):Observable<any>{
    return this.http.post('http://localhost:9999/emp/add',data)
  }
  public listEmployee():Observable<any>{
    return this.http.get('http://localhost:9999/emp/get')
  }
  public listEmployeebysalary():Observable<any>{
    return this.http.get('http://localhost:9999/emp/salary')
  }
  public listEmployeebysalarys():Observable<any>{
    return this.http.get('http://localhost:9999/emp/salarys')
  }
  public marketing():Observable<any>{
    return this.http.get('http://localhost:9999/emp/getbyid/640ee39098aaddef571f40a8')
  }
  
}

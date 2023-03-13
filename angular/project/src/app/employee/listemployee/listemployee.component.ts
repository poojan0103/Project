import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  constructor(private service:EmployeeService){}
  employee : any; 
  ngOnInit(): void {
   this.service.listEmployee().subscribe(data=>{
    console.log(data);
    this.employee = data.data
    
   })
  }

}

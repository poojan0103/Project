import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent  implements OnInit{

  constructor(private service:EmployeeService ) { }

  addEmployee(data:any){
    console.log(data);
    this.service.addEmployee(data).subscribe((res)=>{
      console.log(res)

    })
    
  }
  ngOnInit(): void {
    
  }

}

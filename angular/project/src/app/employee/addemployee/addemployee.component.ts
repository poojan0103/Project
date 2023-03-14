import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import{ Router } from '@angular/router'
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent  implements OnInit{

  constructor(private service:EmployeeService , private router:Router) { }

  addEmployee(data:any){
    console.log(data);
    this.service.addEmployee(data).subscribe((res)=>{
      console.log(res)
      
    })
    this.router.navigateByUrl('/list')
  
    
  }
  

  ngOnInit(): void {
    
  }

}

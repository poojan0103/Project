import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent  {
  constructor(private service:EmployeeService){
    this.list()
  }
  employee : any; 
  //employeeList:any;
  department:string[] =['Marketing','Tech']
  filteredDepartment: string[] = this.department;
  searchTerm: string = '';
  selectedDepartment: string = '';

  list(){
    this.service.listEmployee().subscribe(data=>{
      console.log(data);
      this.employee = data.data
    
     })
     
  }
  
  departments(value:string){
    console.log(value);
    if(value == "2"){
      this.service.marketing().subscribe(data=>{
        this.employee = data.data
      })
    }else{
      this.list()
    }
    

  }
  // filterDepartments() {
  //   this.filteredDepartment = this.department.filter((department) =>
  //     department.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  onoptionSelected(value:string){
    console.log("option selected");
    console.log(value);
    if(value=="2"){
  this.service.listEmployeebysalary().subscribe(data=>{
    this.employee = data.data
    console.log(data);
    
   })
    }else if(value=="3"){
      this.service.listEmployeebysalarys().subscribe(data=>{
        this.employee = data.data;
        console.log(data);
        
      })
    }
    else{
      this.list()
    }
    
 
    
  }
 
}

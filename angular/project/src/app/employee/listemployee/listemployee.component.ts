import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent  implements OnInit{
  
  constructor(private service:EmployeeService){

  }
  departmentlist :any;
  ngOnInit(): void {
    this.list()
    this.alldepartment()
    this.alleduction()
  }
  employee: any
   alleducation :any
  depart : any
  selectedItemId!: number;
  items: any[] = [];
 
  education = '';
  dept = '';
  salaryRange = ''
  // searchTerm: string = '';
  selectedDepartment: string = '';

  list(){
    this.service.listEmployee().subscribe(data=>{
      this.employee = data.data
      console.log(this.employee);
     })
     
  }
  alldepartment(){
    this.service.alldepartment().subscribe(data=>{
      this.departmentlist = data.data
    })
  }
  alleduction(){
    this.service.education().subscribe(data=>{
      this.alleducation = data.data 
    })
  }
  educations(res:any){
    this.education = res.target.value;
    this.onoptionSelected(this.salaryRange,this.dept,this.education)
    
        
  }
  
  departments(res:any){
    this.dept = res.target.value;
    this.onoptionSelected(this.salaryRange,this.dept,this.education);
  

  }
  
  
  onoptionSelected(value:string,department : string,eduction : any){
    this.salaryRange = value;
    let srange = value.split('-');
  
  this.service.listEmployeebysalary(srange[0],srange[1],department,eduction).subscribe(data=>{
  

    this.employee = data.data 
   })

    }
  }
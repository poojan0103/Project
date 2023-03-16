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
    this.alldepart()
    this.alleduction()
  }
  employee: any
   alleducation :any
  depart : any
  selectedItemId!: number;
  items: any[] = [];
  // educ = ''
  education = '';
  dept = '';
  salaryRange = ''
  //employeeList:any;

  searchTerm: string = '';
  selectedDepartment: string = '';

  list(){
    this.service.listEmployee().subscribe(data=>{
      this.employee = data.data
      console.log(this.employee);
     })
     
  }
  alldepart(){
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
    // if(value == "2"){
    //   this.service.marketing().subscribe(data=>{
    //     this.employee = data.data
    //   })
    // }else{
    //   this.list()
    // }
    

  }
  
  // filterDepartments() {
  //   this.filteredDepartment = this.department.filter((department) =>
  //     department.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  onoptionSelected(value:string,department : string,eduction : any){
    this.salaryRange = value;
    let srange = value.split('-');
  
  this.service.listEmployeebysalary(srange[0],srange[1],department,eduction).subscribe(data=>{


    this.employee = data.data 
   })
//     }else if(value=="3"){
//       this.service.listEmployeebysalarys().subscribe(data=>{
//         this.employee = data.data;
//         console.log(data);
        
//       })
    }
//     else{
//       this.list()
//     }
    
 
    
//   }
  }
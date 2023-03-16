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
  }
  employee : any;
  depart : any
  selectedItemId!: number;
  items: any[] = [];


  dept = '';
  salaryRange = ''
  //employeeList:any;

  searchTerm: string = '';
  selectedDepartment: string = '';

  list(){
    this.service.listEmployee().subscribe(data=>{
      console.log(data);
      this.employee = data.data
    
     })
     
  }
  alldepart(){
    this.service.alldepartment().subscribe(data=>{
      this.departmentlist = data.data
      console.log(this.departmentlist);
      
      
    })
  }
  departments(res:any){
    this.dept = res.target.value;
    this.onoptionSelected(this.salaryRange,this.dept);
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

  onoptionSelected(value:string,department : string){
    this.salaryRange = value;
    let srange = value.split('-');
  
  this.service.listEmployeebysalary(srange[0],srange[1],department).subscribe(data=>{


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
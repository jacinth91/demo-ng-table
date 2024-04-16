import { Component, OnInit } from '@angular/core';
import { DemoServService } from '../services/demo-serv.service';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css']
})
export class DemoCompComponent implements OnInit {
  tableData: any = [];
  displayedColumns: string[] = ['id', 'employee name','employee salary','employee age','profile image'];  // Columns to display
  dataSource2 = [
   {
        "id": 22,
        "employee_name": "Yuri Berry",
        "employee_salary": 675000,
        "employee_age": 40,
        "profile_image": ""
    },
    {
      "id": 22,
      "employee_name": "Yuri Berry",
      "employee_salary": 675000,
      "employee_age": 40,
      "profile_image": ""
  },
  {
    "id": 22,
    "employee_name": "Yuri Berry",
    "employee_salary": 675000,
    "employee_age": 40,
    "profile_image": ""
},
{
  "id": 22,
  "employee_name": "Yuri Berry",
  "employee_salary": 675000,
  "employee_age": 40,
  "profile_image": ""
},
{
  "id": 22,
  "employee_name": "Yuri Berry",
  "employee_salary": 675000,
  "employee_age": 40,
  "profile_image": ""
},
{
  "id": 22,
  "employee_name": "Yuri Berry",
  "employee_salary": 675000,
  "employee_age": 40,
  "profile_image": ""
},
{
  "id": 22,
  "employee_name": "Yuri Berry",
  "employee_salary": 675000,
  "employee_age": 40,
  "profile_image": ""
},
{
  "id": 22,
  "employee_name": "Yuri Berry",
  "employee_salary": 675000,
  "employee_age": 40,
  "profile_image": ""
},
{
  "id": 22,
  "employee_name": "Yuri Berry",
  "employee_salary": 675000,
  "employee_age": 40,
  "profile_image": ""
},
{
  "id": 22,
  "employee_name": "Yuri Berry",
  "employee_salary": 675000,
  "employee_age": 40,
  "profile_image": ""
},
    
];
dataSource= []


  
  constructor(private demoServService : DemoServService ) { }

  ngOnInit(): void {
  this.loadData()
     


  }


  loadData(){
    this.demoServService.getData().subscribe(
      (results:any)=>{
        
        this.dataSource = results?.data;
        this.tableData= results?.data;
        console.log(this.dataSource);
      },
      error=>{
        console.log("error fecthing : ", error)
      }
      
     )
  }

  onScroll() {
    console.log('Scrolled!');
    this.dataSource = this.tableData; // Call to load additional data when scrolled to bottom
  }

}

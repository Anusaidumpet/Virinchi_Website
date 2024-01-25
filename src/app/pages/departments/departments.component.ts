import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [NgFor,DropDownButtonAllModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {

  constructor( public router:Router) {}
  redirectTologin(){
    this.router.navigate(['/login'])
  }
  redirectTohome(){
    this.router.navigate(['/home'])
  }
  redirectTobook(){
    this.router.navigate(['/book-an-appointment'])
  }
  redirectTodepartment(){
    this.router.navigate(['/Departments'])
  }


  ngOnInit(): void {
  }

}

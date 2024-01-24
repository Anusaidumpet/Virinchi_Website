import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

constructor( public router:Router,public dialog: MatDialog){}
  redirectTologin(){
    this.router.navigate(['/login'])
  }
  redirectToabout(){
    this.router.navigate(['/about'])
  }
  redirectTohome(){
    this.router.navigate(['/home'])
  }

   generate(): void {
     const dialogRef = this.dialog.open(AppointmentListComponent, {
       width: '525px',height:'98%'
     });
    
  }


}

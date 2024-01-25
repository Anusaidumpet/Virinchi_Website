import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  
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
redirectTodepartment(){
  this.router.navigate(['/departments'])
}

 generate(): void {
   const dialogRef = this.dialog.open(AppointmentListComponent, {
     width: '525px',height:'98%'
   });

  }
}

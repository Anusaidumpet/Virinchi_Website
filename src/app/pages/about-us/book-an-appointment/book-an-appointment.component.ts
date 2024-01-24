import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentListComponent } from '../../appointment-list/appointment-list.component';

@Component({
  selector: 'app-book-an-appointment',
  standalone: true,
  imports: [ FormsModule,AppointmentListComponent],
  templateUrl: './book-an-appointment.component.html',
  styleUrl: './book-an-appointment.component.css'
})

export class BookAnAppointmentComponent {

  constructor(public router: Router) { }
  username: string = '';
  email: string = '';
  preffered: string = '';
  Time: string = '';
  Appointment: string = '';
  Emergency: string = '';
  ngOnInit() {}
  submit() {
    console.log('Book an Appointment with username:', this.username, ', email:', this.email, ', preffered:', this.preffered, ', time:', this.Time, ', appointment:', this.Appointment, ', Emergency:', this.Emergency)
  }
  
  redirectTologin() {
    this.router.navigate(['/login'])
  }
  redirectTohome() {
    this.router.navigate(['/home'])
  }
  redirectToabout() {
    this.router.navigate(['/about'])
  }
}

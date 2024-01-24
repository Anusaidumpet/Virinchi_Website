import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookAnAppointmentComponent } from './pages/about-us/book-an-appointment/book-an-appointment.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path:'', redirectTo: '', pathMatch: 'full' },
  { path:'',component:DashboardComponent},
  { path:'list', component: AppointmentListComponent },
  { path:'home',component: DashboardComponent},
  { path:'login',component: LoginComponent},
  { path:'signup',component: SignupComponent},
  { path:'book-an-appointment',component:BookAnAppointmentComponent},
  { path:'appointment-list', component:AppointmentListComponent},
  { path:'contactus', component:ContactUsComponent},
  { path:'departments', component:DepartmentsComponent}
];


// @NgModule({
//   declarations: [],
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],

// })
export class AppRoutingModule { }

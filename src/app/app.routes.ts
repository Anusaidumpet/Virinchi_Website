import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BookAnAppointmentComponent } from './pages/about-us/book-an-appointment/book-an-appointment.component';

export const routes: Routes = [
  { path:'', redirectTo: '', pathMatch: 'full' },
  { path:'',component:DashboardComponent},
  { path:'list', component: AppointmentListComponent },
  { path:'home',component: DashboardComponent},
  { path:'login',component: LoginComponent},
  { path:'signup',component: SignupComponent},
  { path:'about',component:AboutUsComponent},
  { path:'book-an-appointment',component:BookAnAppointmentComponent},
  { path:'appointment-list', component:AppointmentListComponent}
  // { path:'open-close',component:OpenCloseComponent}
];


// @NgModule({
//   declarations: [],
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],

// })
export class AppRoutingModule { }

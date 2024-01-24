import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgFor,DropDownButtonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent {
  // @Inject('sourceFiles') private sourceFiles: any    sourceFiles.files = ['dropdown-button.css'];
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


  ngOnInit(): void {
  }
  
}

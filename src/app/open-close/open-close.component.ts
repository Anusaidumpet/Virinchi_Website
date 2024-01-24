import { Component } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';


@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css',
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => *', [
        animate('1s')
        //     transition('transform 0.6s ease-in-out', [
        // animate('-webkit-transform 0.6s ease-in-out')
      // transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
      ]),
    ]),
  ],
})
export class OpenCloseComponent {
  isDisabled = false;
  isOpen = false;
  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
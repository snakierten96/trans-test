import { Component, OnInit,
  trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('*',style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter', [ 
        style({ 
          opacity: 0, 
          transform: 'scale(.95)'
        }), 
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          opacity: 0,
          transform: 'scale(.95)'
        }))
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

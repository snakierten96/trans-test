import { Component, animate, trigger,
  transition, style, state } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
  animations: [
    trigger('loader',[
      state('*', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate('500ms ease-in')])
    ])
  ]
})
export class LoadingOverlayComponent { }

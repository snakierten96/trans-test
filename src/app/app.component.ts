import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LoadingOverlayService } from './loading-overlay';

interface NavItem {
  link: string[] | string,
  name: string,
  icon: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';

  navigation: NavItem[] = [
    { link: ['/'], name: 'Home', icon: 'home' },
    { link: ['/browse'], name: 'Browse', icon: 'list'  }
  ];

  constructor(private titleService: Title, private _overlay: LoadingOverlayService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  ngOnDestroy(): void {
    this._overlay.releaseSubscriptions();
  }

}

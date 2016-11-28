import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LoadingOverlayService } from './loading-overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';

  constructor(private titleService: Title, private _overlay: LoadingOverlayService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  ngOnDestroy(): void {
    this._overlay.releaseSubscriptions();
  }

}

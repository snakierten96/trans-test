import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LoadingOverlayService } from './loading-overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private titleService: Title, private _overlay: LoadingOverlayService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}

import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class LoadingStateService {

  private state: BehaviorSubject<boolean> = new BehaviorSubject(true);

  getState(): Observable<boolean> {
    return this.state.distinctUntilChanged()
      .concatMap(value => Observable.of(value).delay(500))
  }

  setState(state: boolean): void {
    this.state.next(state);
  }

}

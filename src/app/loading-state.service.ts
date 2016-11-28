import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class LoadingStateService {

  private state: BehaviorSubject<boolean> = new BehaviorSubject(true);

  getState(): Observable<boolean> {
    return this.state.distinctUntilChanged()
  }

  setState(state: boolean): void {
    this.state.next(state);
  }

}

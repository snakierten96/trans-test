/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadingStateService } from './loading-state.service';

describe('Service: LoadingState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingStateService]
    });
  });

  it('should ...', inject([LoadingStateService], (service: LoadingStateService) => {
    expect(service).toBeTruthy();
  }));
});

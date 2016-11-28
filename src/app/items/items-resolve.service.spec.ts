/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemsResolveService } from './items-resolve.service';

describe('Service: ItemsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsResolveService]
    });
  });

  it('should ...', inject([ItemsResolveService], (service: ItemsResolveService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemDetailResolveService } from './item-detail-resolve.service';

describe('Service: ItemDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemDetailResolveService]
    });
  });

  it('should ...', inject([ItemDetailResolveService], (service: ItemDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});

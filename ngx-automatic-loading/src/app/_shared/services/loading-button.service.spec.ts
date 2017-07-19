import { TestBed, inject } from '@angular/core/testing';

import { LoadingButtonService } from './loading-button.service';

describe('LoadingButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingButtonService]
    });
  });

  it('should be created', inject([LoadingButtonService], (service: LoadingButtonService) => {
    expect(service).toBeTruthy();
  }));
});

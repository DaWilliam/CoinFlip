import { TestBed } from '@angular/core/testing';

import { CoinFlipServiceService } from './coin-flip-service.service';

describe('CoinFlipServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinFlipServiceService = TestBed.get(CoinFlipServiceService);
    expect(service).toBeTruthy();
  });
});

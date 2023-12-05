import { TestBed } from '@angular/core/testing';

import { PokeDetailServiceService } from './poke-detail-service.service';

describe('PokeDetailServiceService', () => {
  let service: PokeDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

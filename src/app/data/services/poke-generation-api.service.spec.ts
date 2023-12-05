import { TestBed } from '@angular/core/testing';

import { PokeGenerationApiService } from './poke-generation-api.service';

describe('PokeGenerationApiService', () => {
  let service: PokeGenerationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeGenerationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

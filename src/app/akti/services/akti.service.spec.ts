import { TestBed } from '@angular/core/testing';

import { AktiService } from './akti.service';

describe('AktiService', () => {
  let service: AktiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AktiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

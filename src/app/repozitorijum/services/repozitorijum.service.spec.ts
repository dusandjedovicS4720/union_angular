import { TestBed } from '@angular/core/testing';

import { RepozitorijumService } from './repozitorijum.service';

describe('RepozitorijumService', () => {
  let service: RepozitorijumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepozitorijumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

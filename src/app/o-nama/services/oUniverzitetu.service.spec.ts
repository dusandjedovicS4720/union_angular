import { TestBed } from '@angular/core/testing';

import { OUniverzitetuService } from './oUniverzitetu.service';

describe('OUniverzitetuService', () => {
  let service: OUniverzitetuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OUniverzitetuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

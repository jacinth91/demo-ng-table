import { TestBed } from '@angular/core/testing';

import { DemoServService } from './demo-serv.service';

describe('DemoServService', () => {
  let service: DemoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

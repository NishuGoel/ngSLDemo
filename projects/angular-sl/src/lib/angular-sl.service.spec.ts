import { TestBed } from '@angular/core/testing';

import { AngularSLService } from './angular-sl.service';

describe('AngularSLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularSLService = TestBed.get(AngularSLService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CheckClassService } from './check-class.service';

describe('CheckClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckClassService = TestBed.get(CheckClassService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FormSubmissionService } from './form-submission.service';

describe('FormSubmissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormSubmissionService = TestBed.get(FormSubmissionService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ExamsetupService } from './examsetup.service';

describe('ExamsetupService', () => {
  let service: ExamsetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

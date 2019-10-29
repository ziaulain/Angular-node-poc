import { TestBed } from '@angular/core/testing';
import { FeathersCurdService } from './feathers-curd.service';

import { JobService } from './job.service';

describe('JobService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    // providers: [FeathersCurdService]
  }));

  it('should be created', () => {
    const service: JobService = TestBed.get(JobService);
    expect(service).toBeTruthy();
  });
});

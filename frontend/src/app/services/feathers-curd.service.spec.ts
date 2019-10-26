import { TestBed } from '@angular/core/testing';

import { FeathersCurdService } from './feathers-curd.service';

describe('FeathersCurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeathersCurdService = TestBed.get(FeathersCurdService);
    expect(service).toBeTruthy();
  });
});

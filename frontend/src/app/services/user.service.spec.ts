import { TestBed } from '@angular/core/testing';
import { FeathersCurdService } from './feathers-curd.service';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    // providers: [FeathersCurdService]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});

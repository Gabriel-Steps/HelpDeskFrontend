import { TestBed } from '@angular/core/testing';

import { ProfileImageServices } from './profile-image-services';

describe('ProfileImageServices', () => {
  let service: ProfileImageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileImageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

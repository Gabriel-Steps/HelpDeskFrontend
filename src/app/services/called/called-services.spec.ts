import { TestBed } from '@angular/core/testing';

import { CalledServices } from './called-services';

describe('CalledServices', () => {
  let service: CalledServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalledServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

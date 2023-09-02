import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { numericoGuard } from './numerico.guard';

describe('numericoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => numericoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

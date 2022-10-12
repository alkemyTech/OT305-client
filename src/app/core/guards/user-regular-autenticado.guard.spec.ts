import { TestBed } from '@angular/core/testing';

import { UserRegularAutenticadoGuard } from './user-regular-autenticado.guard';

describe('UserRegularAutenticadoGuard', () => {
  let guard: UserRegularAutenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserRegularAutenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MockMealService } from './mock-meal-service';

describe('MockMealService', () => {
  let service: MockMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

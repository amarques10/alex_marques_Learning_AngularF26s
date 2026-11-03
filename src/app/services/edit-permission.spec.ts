import { TestBed } from '@angular/core/testing';

import { EditPermission } from './edit-permission';

describe('EditPermission', () => {
  let service: EditPermission;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPermission);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PresetNavigationService } from './preset-navigation.service';

describe('PresetNavigationService', () => {
  let service: PresetNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresetNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

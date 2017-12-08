import { TestBed, inject } from '@angular/core/testing';

import { OverlayServiceService } from './overlay-service.service';

describe('OverlayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverlayServiceService]
    });
  });

  it('should be created', inject([OverlayServiceService], (service: OverlayServiceService) => {
    expect(service).toBeTruthy();
  }));
});

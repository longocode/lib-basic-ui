import { TestBed } from '@angular/core/testing';

import { LibBasicUiService } from './lib-basic-ui.service';

describe('LibBasicUiService', () => {
  let service: LibBasicUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBasicUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

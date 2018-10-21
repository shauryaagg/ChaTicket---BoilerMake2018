import { TestBed } from '@angular/core/testing';

import { DialogflowServiceService } from './dialogflow-service.service';

describe('DialogflowServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogflowServiceService = TestBed.get(DialogflowServiceService);
    expect(service).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { MatToolbarModule, MatIconModule } from '@angular/material';

import { UiModule } from './ui.module';

describe('UiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatIconModule, UiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiModule).toBeDefined();
  });
});

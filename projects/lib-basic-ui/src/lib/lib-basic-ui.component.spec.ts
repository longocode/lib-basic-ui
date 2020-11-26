import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBasicUiComponent } from './lib-basic-ui.component';

describe('LibBasicUiComponent', () => {
  let component: LibBasicUiComponent;
  let fixture: ComponentFixture<LibBasicUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBasicUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBasicUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitWarnDialogComponent } from './exit-warn-dialog.component';

describe('ExitWarnDialogComponent', () => {
  let component: ExitWarnDialogComponent;
  let fixture: ComponentFixture<ExitWarnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitWarnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitWarnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

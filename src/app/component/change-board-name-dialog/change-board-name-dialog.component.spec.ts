import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBoardNameDialogComponent } from './change-board-name-dialog.component';

describe('ChangeBoardNameDialogComponent', () => {
  let component: ChangeBoardNameDialogComponent;
  let fixture: ComponentFixture<ChangeBoardNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBoardNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBoardNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

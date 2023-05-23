import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { EvalComponentComponent } from './eval-component.component';

describe('EvalComponentComponent', () => {
  let component: EvalComponentComponent;
  let fixture: ComponentFixture<EvalComponentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EvalComponentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

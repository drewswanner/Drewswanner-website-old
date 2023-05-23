import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { WpPostComponent } from './wp-post.component';

describe('WpPostComponent', () => {
  let component: WpPostComponent;
  let fixture: ComponentFixture<WpPostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WpPostComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

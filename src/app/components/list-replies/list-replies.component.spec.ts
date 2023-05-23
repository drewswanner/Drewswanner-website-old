import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { ListRepliesComponent } from './list-replies.component';

describe('ListRepliesComponent', () => {
  let component: ListRepliesComponent;
  let fixture: ComponentFixture<ListRepliesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListRepliesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

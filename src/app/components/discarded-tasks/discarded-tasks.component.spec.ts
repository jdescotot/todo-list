import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardedTasksComponent } from './discarded-tasks.component';

describe('DiscardedTasksComponent', () => {
  let component: DiscardedTasksComponent;
  let fixture: ComponentFixture<DiscardedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscardedTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

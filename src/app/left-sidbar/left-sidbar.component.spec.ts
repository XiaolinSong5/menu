import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidbarComponent } from './left-sidbar.component';

describe('LeftSidbarComponent', () => {
  let component: LeftSidbarComponent;
  let fixture: ComponentFixture<LeftSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

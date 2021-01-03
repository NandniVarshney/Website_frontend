import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayingComponent } from './staying.component';

describe('StayingComponent', () => {
  let component: StayingComponent;
  let fixture: ComponentFixture<StayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectingDevice2Component } from './connecting-device2.component';

describe('ConnectingDevice2Component', () => {
  let component: ConnectingDevice2Component;
  let fixture: ComponentFixture<ConnectingDevice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectingDevice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectingDevice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

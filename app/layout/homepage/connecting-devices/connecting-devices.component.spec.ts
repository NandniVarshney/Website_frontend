import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectingDevicesComponent } from './connecting-devices.component';

describe('ConnectingDevicesComponent', () => {
  let component: ConnectingDevicesComponent;
  let fixture: ComponentFixture<ConnectingDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectingDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectingDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

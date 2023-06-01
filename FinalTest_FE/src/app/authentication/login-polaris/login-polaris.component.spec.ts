import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPolarisComponent } from './login-polaris.component';

describe('LoginPolarisComponent', () => {
  let component: LoginPolarisComponent;
  let fixture: ComponentFixture<LoginPolarisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPolarisComponent]
    });
    fixture = TestBed.createComponent(LoginPolarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

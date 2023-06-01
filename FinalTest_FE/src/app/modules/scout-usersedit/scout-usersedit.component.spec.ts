import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutUserseditComponent } from './scout-usersedit.component';

describe('ScoutUserseditComponent', () => {
  let component: ScoutUserseditComponent;
  let fixture: ComponentFixture<ScoutUserseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoutUserseditComponent]
    });
    fixture = TestBed.createComponent(ScoutUserseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

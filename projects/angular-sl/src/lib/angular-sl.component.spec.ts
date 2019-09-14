import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSLComponent } from './angular-sl.component';

describe('AngularSLComponent', () => {
  let component: AngularSLComponent;
  let fixture: ComponentFixture<AngularSLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

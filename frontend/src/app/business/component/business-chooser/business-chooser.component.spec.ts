import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessChooserComponent } from './business-chooser.component';

describe('BusinessChooserComponent', () => {
  let component: BusinessChooserComponent;
  let fixture: ComponentFixture<BusinessChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

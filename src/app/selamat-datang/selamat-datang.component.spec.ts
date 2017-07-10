import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelamatDatangComponent } from './selamat-datang.component';

describe('SelamatDatangComponent', () => {
  let component: SelamatDatangComponent;
  let fixture: ComponentFixture<SelamatDatangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelamatDatangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelamatDatangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

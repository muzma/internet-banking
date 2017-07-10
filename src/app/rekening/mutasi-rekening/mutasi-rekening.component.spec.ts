import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutasiRekeningComponent } from './mutasi-rekening.component';

describe('MutasiRekeningComponent', () => {
  let component: MutasiRekeningComponent;
  let fixture: ComponentFixture<MutasiRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutasiRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutasiRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParoquiasComponent } from './paroquias.component';

describe('ParoquiasComponent', () => {
  let component: ParoquiasComponent;
  let fixture: ComponentFixture<ParoquiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParoquiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParoquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

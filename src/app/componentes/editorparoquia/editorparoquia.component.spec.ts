import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorparoquiaComponent } from './editorparoquia.component';

describe('EditorparoquiaComponent', () => {
  let component: EditorparoquiaComponent;
  let fixture: ComponentFixture<EditorparoquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorparoquiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorparoquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

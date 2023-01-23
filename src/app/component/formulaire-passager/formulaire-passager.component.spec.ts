import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePassagerComponent } from './formulaire-passager.component';

describe('FormulairePassagerComponent', () => {
  let component: FormulairePassagerComponent;
  let fixture: ComponentFixture<FormulairePassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairePassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairePassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

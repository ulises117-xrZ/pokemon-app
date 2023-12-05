import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardInfoComponent } from './pokemon-card-info.component';

describe('PokemonCardInfoComponent', () => {
  let component: PokemonCardInfoComponent;
  let fixture: ComponentFixture<PokemonCardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardInfoComponent]
    });
    fixture = TestBed.createComponent(PokemonCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

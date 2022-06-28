import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFightComponent } from './character-fight.component';

describe('CharacterFightComponent', () => {
  let component: CharacterFightComponent;
  let fixture: ComponentFixture<CharacterFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterFightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

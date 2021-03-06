import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlMousePositionComponent } from './ol-mouse-position.component';

describe('OlMousePositionComponent', () => {
  let component: OlMousePositionComponent;
  let fixture: ComponentFixture<OlMousePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OlMousePositionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlMousePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerModule } from 'ngx-color-picker';

import { ColorSelectorComponent } from './color-selector.component';

describe('ColorSelectorComponent', () => {
  let component: ColorSelectorComponent;
  let fixture: ComponentFixture<ColorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ColorPickerModule
      ],
      declarations: [ColorSelectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSelectorComponent);
    component = fixture.componentInstance;
    component.color = '#FF3456';
    component.colorList = ['#FF0000', '#00FF00', '#0000FF'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HelgolandCoreModule, SettingsService } from '@helgoland/core';

import { TranslateTestingModule } from '../../../../../../testing/translate.testing.module';
import { LabelMapperComponent } from '../../../label-mapper/label-mapper.component';
import { LabelMapperService } from '../../../label-mapper/label-mapper.service';
import { ReferenceValueColorCache, TimeseriesEntryComponent } from './timeseries-entry.component';

describe('TimeseriesEntryComponent', () => {
  let component: TimeseriesEntryComponent;
  let fixture: ComponentFixture<TimeseriesEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HelgolandCoreModule,
        TranslateTestingModule
      ],
      declarations: [
        TimeseriesEntryComponent,
        LabelMapperComponent
      ],
      providers: [
        ReferenceValueColorCache,
        LabelMapperService,
        SettingsService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeseriesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

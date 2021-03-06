import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '@helgoland/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'n52-timezone-selector',
  templateUrl: './timezone-selector.component.html',
  styleUrls: ['./timezone-selector.component.scss']
})
export class TimezoneSelectorComponent implements OnInit {

  public timezone: string;

  constructor(
    private timezoneSrvc: TimezoneService
  ) { }

  ngOnInit() {
    this.timezone = this.timezoneSrvc.getTimezoneName();
  }

  changeTimezone(msc: MatSelectChange) {
    this.timezoneSrvc.setTimezone(msc.value);
  }

}

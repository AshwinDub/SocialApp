import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { BsDatepickerConfig, DatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() maxDate!: Date;
  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-red',
    dateInputFormat: 'DD MMMM YYYY',
  };
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}

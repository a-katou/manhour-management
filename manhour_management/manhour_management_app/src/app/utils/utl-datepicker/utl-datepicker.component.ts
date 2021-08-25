import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'utl-datepicker',
  templateUrl: './utl-datepicker.component.html',
  styleUrls: ['./utl-datepicker.component.less'],
  animations: [
    trigger('datepicker', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('75ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('75ms ease-in' , style({ opacity: 0 }))
      ])
    ])
  ],
  providers: [
    { // ControlValueAccessorを実装する時はお決まり
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UtlDatepickerComponent),
      multi: true
    }
  ]

})
export class UtlDatepickerComponent implements OnInit, ControlValueAccessor {

  public val: string;

  public state: boolean;
  public dates: any;

  constructor(
  ) { }

  onChange: any = () => {};
  onTouch: any = () => {};

  ngOnInit(): void {
    this.state = false;
  }

  public get value(): any {
    return this.val;
  }

  public set value(val: any){
    if (val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
    }
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public onClick($event: any): void {
    if (this.state) {
      this.state = false;
    } else {
      const func = ($e: any) => {
        if ($e.target.closest('.datepicker') === null) {
          this.state = false;
          document.removeEventListener('click', func);
        }
      };
      document.addEventListener('click', func);
      this.open();
      this.state = true;
    }
  }

  private open(): void {
    let now = null;
    if (this.isDate(this.value)) {
      now = new Date(this.value);
    } else {
      now = new Date();
    }
    const dateFrom = new Date(now.getFullYear(), now.getMonth(), 1);
    const dateTo = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    this.dates = [];
    let week = [null, null, null, null, null, null, null];
    for (let i = 0; i < dateTo.getDate(); i++) {
      const dateCurrent = new Date(now.getFullYear(), now.getMonth(), 1);
      dateCurrent.setDate(i + 1);
      week[dateCurrent.getDay()] = dateCurrent;
      if (dateCurrent.getDay() === 6 || i === dateTo.getDate() - 1) {
        this.dates.push(week);
        week = [null, null, null, null, null, null, null];
      }
    }
  }

  public onInput($e: any): void {
    this.value = $e.target.value;
    this.open();
  }

  public onDateClicked(date: Date): void {
    this.value = this.toString(date, 'yyyy/MM/dd');
    this.state = false;
  }

  private toString(date: Date, format: string = null): string {

    let dateString = format ? format : 'yyyy/MM/dd HH:mm:ss';
    dateString = dateString.replace(/yyyy/g, '' + date.getFullYear());
    dateString = dateString.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    dateString = dateString.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    dateString = dateString.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    dateString = dateString.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    dateString = dateString.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    dateString = dateString.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    dateString = dateString.replace(/M/g, '' + (date.getMonth() + 1));
    dateString = dateString.replace(/d/g, '' + (date.getDate()));
    dateString = dateString.replace(/H/g, '' + (date.getHours()));
    dateString = dateString.replace(/m/g, '' + (date.getMinutes()));
    dateString = dateString.replace(/s/g, '' + (date.getSeconds()));
    dateString = dateString.replace(/S/g, '' + (date.getMilliseconds()));
    return dateString;
  }

  private isDate(strDate: string): boolean {

    if (!strDate || strDate === '' || strDate === null){
      return false;
    }

    if (!strDate.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)){
      return false;
    }

    const date = new Date(strDate);
    if (date.getFullYear() !==  Number(strDate.split('/')[0])
        || date.getMonth() !== Number(strDate.split('/')[1]) - 1
        || date.getDate() !== Number(strDate.split('/')[2])
    ){
      return false;
    }
    return true;
  }

}

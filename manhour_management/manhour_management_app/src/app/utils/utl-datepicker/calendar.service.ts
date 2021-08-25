export class CalendarService {

  private date: Date;

  constructor(date: number = null) {
    if (date == null) {
      this.date = new Date();
    } else {
      this.date = new Date(date);
    }
  }

  public parse(dateString: string): CalendarService {
    this.date = new Date(Date.parse(dateString));
    return this;
  }

  public getDate(): Date {
    return this.date;
  }

  public getDays(): number {
    const f = this.first().getDate().getDate();
    const l = this.last().getDate().getDate();
    return l - f + 1;
  }

  public first(): CalendarService {
    const date = new Date(this.date.getTime());
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return new CalendarService(date.getTime());
  }

  public last(): CalendarService {
    const date = new Date(this.date.getTime());
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return new CalendarService(date.getTime());
  }

  public addYear(num: number): CalendarService {
    this.date.setFullYear(this.date.getFullYear() + num);
    return this;
  }

  public addMonth(num: number): CalendarService {
    this.date.setMonth(this.date.getMonth() + num);
    return this;
  }

  public addDay(num: number): CalendarService {
    this.date.setDate(this.date.getDate() + num);
    return this;
  }

  public addHour(num: number): CalendarService {
    this.date.setHours(this.date.getHours() + num);
    return this;
  }

  public addMinute(num: number): CalendarService {
    this.date.setMinutes(this.date.getMinutes() + num);
    return this;
  }

  public addSecond(num: number): CalendarService {
    this.date.setSeconds(this.date.getSeconds() + num);
    return this;
  }

  public addMilliSecond(num: number): CalendarService {
    this.date.setMilliseconds(this.date.getMilliseconds() + num);
    return this;
  }

  public toString(format: string = null): string {

    let dateString = format ? format : 'yyyy/MM/dd HH:mm:ss';
    dateString = dateString.replace(/yyyy/g, '' + this.date.getFullYear());
    dateString = dateString.replace(/MM/g, ('0' + (this.date.getMonth() + 1)).slice(-2));
    dateString = dateString.replace(/dd/g, ('0' + this.date.getDate()).slice(-2));
    dateString = dateString.replace(/HH/g, ('0' + this.date.getHours()).slice(-2));
    dateString = dateString.replace(/mm/g, ('0' + this.date.getMinutes()).slice(-2));
    dateString = dateString.replace(/ss/g, ('0' + this.date.getSeconds()).slice(-2));
    dateString = dateString.replace(/SSS/g, ('00' + this.date.getMilliseconds()).slice(-3));
    dateString = dateString.replace(/M/g, '' + (this.date.getMonth() + 1));
    dateString = dateString.replace(/d/g, '' + (this.date.getDate()));
    dateString = dateString.replace(/H/g, '' + (this.date.getHours()));
    dateString = dateString.replace(/m/g, '' + (this.date.getMinutes()));
    dateString = dateString.replace(/s/g, '' + (this.date.getSeconds()));
    dateString = dateString.replace(/S/g, '' + (this.date.getMilliseconds()));
    return dateString;
  }

}

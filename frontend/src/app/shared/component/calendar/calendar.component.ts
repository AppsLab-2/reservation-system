import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hera-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  selected: any;
  @Input() allowedDates?: Date[];
  @Input() hideSelection = false;
  @Output() selectedDate = new EventEmitter<Date>();

  onSelect(date: Date | null): void {
    if (date) {
      if (!this.hideSelection) {
        this.selected = date;
      }
      this.selectedDate.emit(date);
    }
  }

  dateFilter = (date: Date | null): boolean => {
    if (!this.allowedDates) {
      return true;
    }
    if (!date) {
      return false;
    }
    return this.allowedDates.findIndex(d => d.getTime() === date.getTime()) !== -1;
  }

}

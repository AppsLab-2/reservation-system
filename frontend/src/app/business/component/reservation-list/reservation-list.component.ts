import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reservation } from '../../../core/model/reservation.model';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'hera-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {

  @Input()
  reservations!: Reservation[];

  @Output()
  selected = new EventEmitter<Reservation>();

  onSelected(event: MatSelectionListChange): void {
    const reservation = event.options[0].value as Reservation;
    this.selected.emit(reservation);
  }

}

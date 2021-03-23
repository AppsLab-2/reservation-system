import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hera-cards-header',
  templateUrl: './cards-header.component.html',
  styleUrls: ['./cards-header.component.scss']
})
export class CardsHeaderComponent implements OnInit {
  @Input() icon?: string;
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

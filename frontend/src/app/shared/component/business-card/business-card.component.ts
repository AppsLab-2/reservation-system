import {Component, Input, OnInit} from '@angular/core';
import {Business} from '../../../core/model/business.model';

@Component({
  selector: 'hera-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() business?: Business;

  constructor() { }

  ngOnInit(): void {
  }

}

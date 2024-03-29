import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hera-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() icon?: string;
  @Input() title?: string;
  @Input() showButton?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hera-business-header',
  templateUrl: './business-header.component.html',
  styleUrls: ['./business-header.component.scss']
})
export class BusinessHeaderComponent {

  @Input()
  icon = '';

  @Input()
  title = 'Header';

  @Input()
  buttonText = 'Button';

  @Output()
  action = new EventEmitter();

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent  {

  @Input() public label: string = 'label';
  @Input() public placeholder: string = 'Placeholder';

  constructor() { }


}
